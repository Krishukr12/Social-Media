const express = require("express");
const cors = require("cors");

const connection = require("./config/db.js");
const userRouter = require("./routes/user.routes.js");
const postRouter = require("./routes/post.routes.js");

require("dotenv").config();

const app = express();

//!.... Middleware
app.use(express.json());
app.use(cors());

//!.... Routes
app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);

//!.... Start the server
app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("Connected to mongoDB");
    console.log(`server is running on ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
