const PostModel = require("../models/Post.model.js");
const { createError } = require("../utils/error.js");

const createNewPost = async (req, res, next) => {
  const { content } = req.body;
  if (content.length === 0 || content.length > 300) {
    return next(
      createError(400, "Content length must be between 1 and 299 characters")
    );
  }

  try {
    const newPost = new PostModel(req.body);
    await newPost.save();
    res.status(200).send({ status: "success", post: newPost });
  } catch (error) {
    next(error);
  }
};

//get post by id
const getPost = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id);
    // If post not found,
    if (!post) return next(createError(400, "Post not found"));

    // Send a success response to the client with the post data
    res.status(200).send({ status: "success", post: post });
  } catch (error) {
    next(error);
  }
};

// update post by id
const updatePost = async (req, res, next) => {
  const { content } = req.body;
  const postData = req.body;
  if (content.length === 0 || content.length > 300) {
    return next(
      createError(400, "Content length must be between 1 and 299 characters")
    );
  }
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: postData },
      { new: true }
    );
    // If the post was successfully updated,
    res.status(200).send({ status: "success", post: updatedPost });
  } catch (error) {
    next(error);
  }
};

// delete post by id
const deletePost = async (req, res, next) => {
  try {
    const deletedPost = await PostModel.findByIdAndDelete(req.params.id);
    // If no user was found with the given ID, return an error
    if (!deletedPost) {
      return next(createError(404, "Post not found"));
    }
    // If the post was successfully deleted, return a success message
    res
      .status(200)
      .json({ status: "success", message: "Post has been deleted" });
  } catch (error) {
    next(error);
  }
};

// Increment the like count of a post by id.
const incrementLikeCount = async (req, res, next) => {
  try {
    const updatePost = await PostModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $inc: { likes: 1 },
      },
      { new: true }
    );

    res.status(200).send({
      status: "success",
      likes: updatePost.likes,
      message: "Likes updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

//Decrement the like count of a post by id
const decrementLikeCount = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (post.likes <= 0) {
      return next(
        createError(400, "Cannot decrement likes: likes are already at 0")
      );
    }

    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $inc: { likes: -1 },
      },
      { new: true }
    );
    res.status(200).send({
      status: "success",
      message: "Likes updated successfully",
      likes: updatedPost.likes,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewPost,
  getPost,
  updatePost,
  deletePost,
  incrementLikeCount,
  decrementLikeCount,
};
