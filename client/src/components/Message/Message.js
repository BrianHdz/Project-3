import React, { Component } from "react";
import { connect } from "react-redux";
import { formatMessage, formatDate } from "../../utils/helpers";
import { Link, withRouter } from "react-router-dom";

//importing icons from react-icons
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

import { handleToggleMessage } from "../../actions/messages";

class Message extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    //todo: redirect to parent message
    this.props.history.push(`/message/${id}`);
  };

  handleLike = (e) => {
    e.preventDefault();

    const { dispatch, message, authedUser } = this.props;

    //dispatching the action creator
    dispatch(
      handleToggleMessage({
        id: message.id,
        hasLiked: message.hasLiked,
        authedUser,
      })
    );

    //
  };

  render() {
    console.log(this.props);
    const { message } = this.props;

    if (message === null) {
      return <p>This message doesn't exist</p>;
    }

    const { name, timestamp, text, hasLiked, likes, id } = message;

    return (
      <Link to={`/message/${id}`} className="message">
        <div className="message-info">
          <div>
            <span className="auth-name">{name}</span>
            <div>{formatDate(timestamp)} </div>
            <p className="message-text">{text}</p>
          </div>

          <div className="message-icons">
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="message-icon" />
              ) : (
                <TiHeartOutline className="message-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes} </span>
          </div>
        </div>
      </Link>
    );
  }
}

//id comes from the props passed by a parent component
function mapStateToProps({ authedUser, users, messages }, { id }) {
  const message = messages[id]; //getting the specific message by its id
  const parentMessage = message ? messages[message.replyingTo] : null; //check if the specific message is a reply to another one. If so, get information about that parent message

  return {
    authedUser,
    message: message //making sure a message exists
      ? formatMessage(message, users[message.author], authedUser, parentMessage)
      : null,
  };
}

//using withRouter because this component is not being rendered by react router, so to have access to history props, we need to use withRouter
export default withRouter(connect(mapStateToProps)(Message));
