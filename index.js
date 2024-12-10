const express = require('express');
require('dotenv').config();

const app = express();
app.get('/', (req, res) => {
  res.send("Would You Rather API is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
})

