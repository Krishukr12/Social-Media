const { createError } = require("../utils/error.js");

// To check before update to ensure all fields are in correct format
const checkUpdateFields = (req, res, next) => {
  const { email, name, bio } = req.body;
  if (email) {
    return next(createError(403, "Updating the email field is not allowed"));
  }

  // Check if name is not empty and less than 50 characters
  if (!name || name.length > 50) {
    return next(
      createError(400, "Name must be provided and be less than 50 characters.")
    );
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

module.exports = { checkUpdateFields };
