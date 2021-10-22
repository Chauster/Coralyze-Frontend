const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 3,
    },
    ip_add: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 5,
    },
    // port: {
    //   type: String,
    //   required: true,
    //   unique: false,
    //   trim: true,
    //   minLength: 2,
    // },
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
