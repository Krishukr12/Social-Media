const UserModel = require("../models/User.model");

const getUserCount = async (req, res, next) => {
  try {
    // Count the total number of documents in the UserModel collection
    const totalUsersCount = await UserModel.countDocuments();

    // Send a successful response with the total user count in a JSON object
    res.status(200).json({
      status: "success",
      totalUsersCount: totalUsersCount,
    });
  } catch (error) {
    // If an error occurs, pass it to the next middleware to handle it
    next(error);
  }
};

const getTop5ActiveUsers = (req, res) => {
  res.send("top5 active users");
};
module.exports = {
  getUserCount,
  getTop5ActiveUsers,
};
