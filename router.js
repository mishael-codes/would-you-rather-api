const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");
const questions = JSON.parse(fs.readFileSync("./api/question.json", "utf-8"));

// questions by category or all questions
router.get("/questions", (req, res) => {
  try {
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// all question randomly
router.get("/questions/random", (req, res) => {
  const random = questions[Math.floor(Math.random() * questions.length)];
  try {
    res.status(200).json(random);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// Get questions by category using URL parameter
router.get("/questions/:category", (req, res) => {
  const { category } = req.params; // Access the category from the URL parameter
  const filtered = questions.filter((q) => q.category === category);

  if (filtered.length > 0) {
    try {
      res.status(200).json(filtered);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong!" });
    }
  } else {
    res.status(404).json({ error: "No questions found in this category." });
  }
});

module.exports = router;
