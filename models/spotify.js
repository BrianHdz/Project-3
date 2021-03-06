const mongoose = require("mongoose");
const Schema = mongoose.Schema

const spotifySchema = new Schema({
    uri: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true}
})

const Spotify = mongoose.model("Spotify", spotifySchema)

module.exports = Spotify;