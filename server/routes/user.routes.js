const { Router } = require("express");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

const { validateUserData } = require("../middlewares/validateUserData.js");
const userRouter = Router();

// Create a new user
userRouter.post("/", validateUserData, createUser);

//Retrieve a user by id.
userRouter.get("/:id", getUser);

//Update a user's name or bio by id.
userRouter.put("/:id", updateUser);

//Delete a user by id.
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
