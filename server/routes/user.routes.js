const { Router } = require("express");

// Import the functions from the userController module
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController.js");

// import validate UserData and checkUpdates middleware
const { validateUserData } = require("../middlewares/validateUserData.js");
const { checkUpdateFields } = require("../middlewares/checkUpdateFields.js");

const userRouter = Router();

// Create a new user
userRouter.post("/", validateUserData, createUser);

// get all users
userRouter.get("/", getAllUsers);

//Retrieve a user by id.
userRouter.get("/:id", getUser);

//Update a user's name or bio by id.
userRouter.put("/:id", checkUpdateFields, updateUser);

//Delete a user by id.
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
