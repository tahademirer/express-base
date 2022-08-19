const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  surname: {
    type: String,
    required: true,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: false,
    default: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

module.exports = UserSchema;
