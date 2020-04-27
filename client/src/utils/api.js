import axios from "axios";

export default {
  // Saves a User to the database
  createUser: function (UserData) {
    return axios.post("/api/users", UserData);
  },

  // Signs a user in from the database
  signIn: function (UserData) {
    // Enter code to read from database and 
    // if E-mail and password match, sign the user in.
    // See Wk20 Act22 client/src/utils/API.js
  
  },

  createSpotify: function(SpotifyData) {
    return axios.post("/api/spotify", SpotifyData)
  }
};
