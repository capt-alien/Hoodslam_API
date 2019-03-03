const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('../models/user');


const FighterSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  affiliation: { type: String, required: true },
  bio: { type: String, required: true },
  u_name : { type: Schema.Types.ObjectId, ref: "User", required: true }

});

module.exports = mongoose.model("Fighter", FighterSchema);
