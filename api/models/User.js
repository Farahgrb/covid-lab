const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    position: {
      type: String,
      max: 50,
    },
    studies: {
      type: String,
      max: 50,
    },
    researchStage: {
      type: Number,
      enum: [1, 2, 3],
    },
    
  },
  { timestamps: true }
);
var User;

if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', UserSchema);
}

module.exports = User;
