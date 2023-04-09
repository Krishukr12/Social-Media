const UserModel = require("../models/User.model");

const getUserCount = async (req, res, next) => {
  try {
    // Count the total number of documents
    const totalUsersCount = await UserModel.countDocuments();
    res.status(200).send({
      status: "success",
      totalUsersCount: totalUsersCount,
    });
  } 
  catch (error) {
    // Forward any errors to the error handling middleware
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
