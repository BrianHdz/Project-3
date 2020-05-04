const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.SavedVideos.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAllYoutubeVideos: function (req, res) {
    db.SavedVideos.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  removeYoutubeVideo: function (req, res) {
    db.SavedVideos.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
