const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    likes: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
