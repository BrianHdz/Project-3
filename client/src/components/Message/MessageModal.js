import React, { Component } from "react";
import { connect } from "react-redux";

import Message from "./Message";
import NewMessage from "./NewMessage";

class MessageModal extends Component {
    render() {
        const { id, replies } = this.props;

        return (
            <div>
                <Message id={id} />
                {/* passing the parent message id */}
                <NewMessage id={id} />

                {replies.length !== 0 && <h3 className="center">Replies</h3>}
                <ul>
                    {replies.map(replyId => (
                        <li key={replyId}>
                            <Message id={replyId} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, messages, users }, props) {
    const { id } = props.match.params;

    return {
        id,
        replies: !messages[id]
            ? [] //if doesn't exist a message with this id, the reply will be an empty array
            : messages[id].replies.sort(
                (a, b) => messages[b].timestamp - messages[a].timestamp
            )
    };
}

export default connect(mapStateToProps)(MessageModal);