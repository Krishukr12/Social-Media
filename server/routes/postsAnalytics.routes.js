const { Router } = require("express");

const postAnalyticsRouter = Router();

const {
  getPostsCount,
  getTop5LikedPosts,
} = require("../controllers/postAnalyticsController.js");

// count of total posts
postAnalyticsRouter.get("/", getPostsCount);

// Retrieve the top 5 most liked posts.
postAnalyticsRouter.get("/top-liked", getTop5LikedPosts);

module.exports = {
  postAnalyticsRouter,
};
