import axios from "axios";
import {
  _getUsers,
  _getMessages,
  _saveLikeToggle,
  _saveMessage,
} from "./_DATA.js";

export default {
  // Saves a User to the database
  createUser: function (UserData) {
    return axios.post("/api/users", UserData);
  },

  // Signs a user in from the database. Grabs parameters
  // to push to routes/api/users.js
  signIn: function (query) {
    return axios.get("/api/users/", { params: { query } });

    // console.log(query)
  },

  // Testing this axios call. It works with controllers/account.js
  // logIn: function(query){
  //   axios.get("/api/users/", { params: { query } });
  //   console.log(query)
  // },

  createSpotify: function (SpotifyData) {
    return axios.post("/api/spotify", SpotifyData);
  },

  getSpotifyFavs: function () {
    return axios.get("/api/spotify");
  },

  deleteSpotifyFav: function (id) {
    return axios.delete("/api/spotify/" + id);
  },

  saveVideo: function (YoutubeData) {
    return axios.post("/api/youtube", YoutubeData);
  },

  getYoutubeFavs: function () {
    return axios.get("/api/youtube");
  },

  deleteYoutubeFav: function (id) {
    return axios.delete("/api/youtube/" + id);
  },
};

export function getInitialData() {
  return Promise.all([_getUsers(), _getMessages()]).then(
    ([users, messages]) => ({
      users,
      messages,
    })
  );
}

export function saveLikeToggle(info) {
  return _saveLikeToggle(info);
}

export function saveMessage(info) {
  return _saveMessage(info);
}
