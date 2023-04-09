const { Router } = require("express");

const userAnalyticsRouter = Router();
// Import the functions from the postAnalyticsController module
const {
  getUserCount,
  getTop5ActiveUsers,
} = require("../controllers/userAnalyticsController.js");

//Retrieve the total number of users.
userAnalyticsRouter.get("/", getUserCount);

//Retrieve the top 5 most active users.
userAnalyticsRouter.get("/top-active", getTop5ActiveUsers);

module.exports = userAnalyticsRouter;
