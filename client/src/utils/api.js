import axios from "axios";
import {
  _getUsers,
  _getMessages,
  _saveLikeToggle,
  _saveMessage,
} from './_DATA.js'

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
};

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getMessages(),
  ]).then(([users, messages]) => ({
    users,
    messages,
  }))
}

export function saveLikeToggle(info) {
  return _saveLikeToggle(info)
}

export function saveMessage(info) {
  return _saveMessage(info)
}
