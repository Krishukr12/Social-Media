const UserModel = require("../models/User.model");

// get all users count
const getUserCount = async (req, res, next) => {
  try {
    // Count the total number of documents
    const totalUsersCount = await UserModel.countDocuments();
    res.status(200).send({
      status: "success",
      totalUsersCount: totalUsersCount,
    });
  } catch (error) {
    // Forward any errors to the error handling middleware
    next(error);
  }
};

const getTop5ActiveUsers = async (req, res) => {
  //Todo : is reaming necessary
  try {
    const getTop5ActiveUsers = await UserModel.aggregate([
      { $group: { _id: "$user_id", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);
    res.send(getTop5ActiveUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
module.exports = {
  getUserCount,
  getTop5ActiveUsers,
};
