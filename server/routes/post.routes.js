const { Router } = require("express");

const postRouter = Router();

// Import the functions from the postController module
const {
  createNewPost,
  getPost,
  updatePost,
  deletePost,
  incrementLikeCount,
  decrementLikeCount,
} = require("../controllers/postController.js");

// create a new post
postRouter.post("/", createNewPost);

// get post by id
postRouter.get("/:id", getPost);

//Update a post's content by id.
postRouter.put("/:id", updatePost);

//Delete a post by id.
postRouter.delete("/:id", deletePost);

// Increment like count of post by id
postRouter.post("/:id/like", incrementLikeCount);

//Decrement the like count of a post by id.
postRouter.post("/:id/unlike", decrementLikeCount);

module.exports = postRouter;
