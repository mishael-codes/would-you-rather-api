const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");
const questions = JSON.parse(fs.readFileSync("./question.json", "utf-8"));

// questions by category or all questions
router.get("/questions", (req, res) => {
  res.json(questions);
});

// all question randomly
router.get("/questions/random", (req, res) => {
  const random = questions[Math.floor(Math.random() * questions.length)];
  res.json(random);
});

// Get questions by category using URL parameter
router.get("/questions/:category", (req, res) => {
  const { category } = req.params; // Access the category from the URL parameter
  const filtered = questions.filter((q) => q.category === category);

  if (filtered.length > 0) {
    res.json(filtered);
  } else {
    res.status(404).json({ error: "No questions found in this category." });
  }
});



module.exports = router;
