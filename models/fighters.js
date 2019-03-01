const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FighterSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  affiliation: { type: String, required: true },
  bio: { type: String, required: true }
});

module.exports = mongoose.model("Fighter", FighterSchema);
