const mongoose = require("mongoose");

// Import User model and error and email validation utilities
const UserModel = require("../models/User.model.js");
const { createError } = require("../../server/utils/error.js");

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    // Send success response with created user data
    res.status(200).send({ status: "success", user: newUser });
  } catch (error) {
    // Forward any errors to the error handling middleware
    next(error);
  }
};

// get all users

const getAllUsers = async (req, res, next) => {
  try {
    const AllUser = await UserModel.find({});
    res.status(200).send({ status: "success", Users: AllUser });
  } catch (error) {
    next(error);
  }
};

// get User by ID
const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    // If user not found, send a 404 error response to the client
    if (!user) return next(createError(400, "User not found"));

    res.status(200).send({ status: "success", user });
  } catch (error) {
    // Forward any errors to the error handling middleware
    next(error);
  }
};

// Update user by id
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: userData,
      },
      { new: true }
    );

    // If no user was found with the given ID, return an error
    if (!updatedUser) {
      return next(createError(404, "User not found"));
    }

    res.status(200).send({ status: "success", user: updatedUser });
  } catch (error) {
    // Forward any errors to the error handling middleware
    next(error);
  }
};

//Delete a user by id
const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    // If no user was found with the given ID, return an error
    if (!deletedUser) {
      return next(createError(404, "User not found"));
    }

    // If the user was successfully deleted, return a success message
    res
      .status(200)
      .json({ status: "success", message: "User has been deleted" });
  } catch (error) {
    // Forward any errors to the error handling middleware
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
