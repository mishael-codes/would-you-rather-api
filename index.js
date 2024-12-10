const express = require("express");
const questionsRouter = require("./router");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/", questionsRouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
