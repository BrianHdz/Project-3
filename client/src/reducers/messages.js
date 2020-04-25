import { RECEIVE_MESSAGES, TOGGLE_MESSAGE, ADD_MESSAGE } from "../actions/messages";

export default function messages(state = {}, action) {
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return {
                ...state,
                ...action.messages
            };

        case ADD_MESSAGE:
            const { message } = action; //getting the newly added message from action

            let replyingTo = {};
            if (message.replyingTo !== null) {
                replyingTo = {
                    [message.replyingTo]: {
                        //id of the message we are replying to
                        ...state[message.replyingTo], //everything that was before
                        replies: state[message.replyingTo].replies.concat([message.id])
                    }
                };
            }

            return {
                ...state,
                [action.message.id]: action.message,
                ...replyingTo
            };

        case TOGGLE_MESSAGE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes:
                        action.hasLiked === true
                            ? state[action.id].likes.filter(uid => uid !== action.authedUser) //if has liked, remove it (dislike it)
                            : state[action.id].likes.concat([action.authedUser])
                }
            };

        default:
            return state;
    }
}