const UserModel = require("../models/User.model.js");

const { createError } = require("../../server/utils/error.js");
const { isValidEmail } = require("../../server/utils/validateEmail.js");

const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  const isEmailTaken = await UserModel.findOne({ email: req.body.email });

  if (!name || name.length > 50) {
    return next(
      createError(400, "Name must be provided and less than 50 characters.")
    );
  }

  if (isEmailTaken) {
    return next(createError(409, "Email address is already registered."));
  }

  if (!isValidEmail(email)) {
    return next(createError(400, "Invalid email address."));
  }

  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(200).send({ status: "success", user: newUser });
  } catch (error) {
    next(error);
  }
};

const getUser = (req, res) => {
  res.send("user by id");
};

const updateUser = (req, res) => {
  res.send("user updated");
};

const deleteUser = (req, res) => {
  res.send("user deleted");
};
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
