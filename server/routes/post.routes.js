const { Router } = require("express");

const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.send("At post routes page");
});

module.exports = postRouter;
