const mongoose = require("mongoose");
const UserSchema = require("../schema/User.js");

const UserModel = new mongoose.model("User", UserSchema);

module.exports = UserModel;
