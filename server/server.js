const express = require("express");
const connection = require("./config/db.js");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to mongoDB");
    console.log(`server is running on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
