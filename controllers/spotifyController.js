const db = require("../models");

// Defining methods for the booksController
module.exports = {

create: function(req, res) {
    db.Spotify.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
},

findAllSpotifyPlaylist: function(req,res) {
    db.Spotify
    .find(req.query)
    .sort({ date: -1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

removeSpotifyPlaylist: function(req, res) {
    db.Spotify
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}

}