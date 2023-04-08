const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    bio: {
      type: String,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
