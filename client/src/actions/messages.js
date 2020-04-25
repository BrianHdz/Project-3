import { saveLikeToggle, saveMessage } from "../utils/api";

//importing loading bar to show when we submit a message
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";

function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    };
}

//args: message text and the message that the newMessage is replying to, if any
export function handleAddMessage(text, replyingTo) {
    //using getState to get the current state of our store
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading()); //show loading bar
        return saveMessage({
            text,
            author: authedUser,
            replyingTo
        })
            .then(message => dispatch(addMessage(message)))
            .then(() => dispatch(hideLoading()));
    };
}

//action creator
export function receiveMessages(messages) {
    return {
        type: RECEIVE_MESSAGES,
        messages
    };
}

//functions for toggling message likes
function toggleMessage({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_MESSAGE,
        id,
        authedUser,
        hasLiked
    };
}
//assynchronous action creator (which is exported)
export function handleToggleMessage(info) {
    return dispatch => {
        //using optimistic updates here, so first we toggle the message and then update the backend (server)
        dispatch(toggleMessage(info));

        //now update inside server and watch for possible errors
        return saveLikeToggle(info).catch(e => {
            console.warn("Error in handleToggleMessage ", e);
            dispatch(toggleMessage(info)); //resetting back to what it was initially
            alert("There was an error liking the message. Try again!");
        });
    };
}