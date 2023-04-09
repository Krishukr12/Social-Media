//Retrieve the total number of posts.

const PostModel = require("../models/Post.model.js");

const getPostsCount = async (req, res, next) => {
  try {
    // Count the total number of documents
    const totalPosts = await PostModel.countDocuments({});
    res.status(200).send({
      status: "success",
      totalPostsCount: totalPosts,
    });
  } catch (error) {
    // Forward any errors to the error handling middleware
    next(error);
  }
};

const getTop5LikedPosts = async (req, res, next) => {
  try {
    const top5LikedPosts = await PostModel.find().sort({ likes: -1 }).limit(5);
    res.status(200).send({
      status: "success",
      top5LikedPosts,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getPostsCount,
  getTop5LikedPosts,
};
