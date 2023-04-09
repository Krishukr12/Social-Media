const createNewPost = (req, res, next) => {
  res.send("post created");
};

//get post by id
const getPost = (req, res, next) => {
  res.send("post getById");
};

// update post by id
const updatePost = (req, res, next) => {
  res.send("post update");
};

// delete post by id
const deletePost = (req, res, next) => {
  res.send("post delete");
};

// Increment the like count of a post by id.
const incrementLikeCount = (req, res) => {
  res.send("post increment");
};

//Decrement the like count of a post by id
const decrementLikeCount = (req, res) => {
  res.send("decrement like count");
};
module.exports = {
  createNewPost,
  getPost,
  updatePost,
  deletePost,
  incrementLikeCount,
  decrementLikeCount,
};
