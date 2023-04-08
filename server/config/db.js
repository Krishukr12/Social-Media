const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on("connected", () => {
  console.log("connection is established");
});

mongoose.connection.on("disconnected", () => {
  console.log("connection is unestablished");
});

module.exports = connection;
