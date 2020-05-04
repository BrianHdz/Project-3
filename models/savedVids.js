const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedVideosSchema = new Schema({
  favorites: String,
});

const SavedVideos = mongoose.model("SavedVideos", savedVideosSchema);

module.exports = SavedVideos;
