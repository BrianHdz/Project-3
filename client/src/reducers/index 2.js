import { combineReducers } from "redux";

import authedUser from "./authedUser";
import users from "./users";
import messages from "./messages";

import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    authedUser,
    users,
    messages,
    loadingBar: loadingBarReducer
});