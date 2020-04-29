import { getInitialData } from "../utils/api";

//importing action creators
import { receiveMessages } from "./messages";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

//importing action creators of loading bar
import { showLoading, hideLoading } from "react-redux-loading";

//hard-coding an autherized user
const AUTHED_ID = "toritheterrible";

export function handleInitialData() {
    return dispatch => {
        //before retrieving info, show loading bar
        dispatch(showLoading());

        return getInitialData().then(({ users, messages }) => {
            dispatch(receiveMessages(messages));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID)); //hard-coded above

            //after everything has loaded, hide loading bar
            dispatch(hideLoading());
        });
    };
}