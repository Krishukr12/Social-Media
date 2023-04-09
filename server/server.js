const express = require("express");
const cors = require("cors");

const { connection } = require("./config/db.js");
const userRouter = require("./routes/user.routes.js");
const postRouter = require("./routes/post.routes.js");

const userAnalyticsRouter = require("../server/routes/userAnalytics.routes.js");
const { postAnalyticsRouter } = require("./routes/postsAnalytics.routes.js");

require("dotenv").config();

const app = express();

//  Compulsory Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

//  User routes
app.use("/users", userRouter);
app.use("/analytics/users", userAnalyticsRouter);

//  Post routes
app.use("/posts", postRouter);
app.use("/analytics/posts", postAnalyticsRouter);

//  Customs error handlers
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Internal Server Error";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

//  Start the server
app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("Connected to mongoDB");
    console.log(`server is running on ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
