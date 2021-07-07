const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 2,
    },
    familyname: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 2,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
      // trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
      minlength: 10,
    },
    // dob: {
    //   type: Date,
    //   required: true,
    // }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
