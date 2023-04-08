const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("At user routes page");
});

module.exports = userRouter;
