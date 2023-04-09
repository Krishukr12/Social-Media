const { createError } = require("../utils/error.js");
const { isValidEmail } = require("../utils/validateEmail.js");
const validateUserData = async (req, res, next) => {
  // Destructure name and email from request body
  const { name, email, bio } = req.body;

  // Check if name is not empty and less than 50 characters
  if (!name || name.length > 50) {
    return next(
      createError(400, "Name must be provided and less than 50 characters.")
    );
  }

  // Check if email is already registered
  const isEmailTaken = await UserModel.findOne({ email: req.body.email });
  if (isEmailTaken) {
    return next(createError(409, "Email address is already registered."));
  }

  // Check if email is valid
  if (!isValidEmail(email)) {
    return next(createError(400, "Invalid email address."));
  }

  // Check that the bio field, if present, has a length of 0 to 200 characters
  if (bio && (typeof bio !== "string" || bio.length > 200)) {
    return next(
      createError(400, "Bio must be a string with length 0-200 characters.")
    );
  }

  // If all validation passes, move on to the next middleware or route handler
  next();
};

module.exports = { validateUserData };
