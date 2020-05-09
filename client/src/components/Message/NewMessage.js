import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddMessage } from "../../actions/messages";

class NewMessage extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;

    //if we are at route /new, there is no id, so we are not replying to any message
    //if we are at route /message/:id, we are replying to that id
    const { dispatch, id } = this.props; //if id is a thing, it means we are replying to this id

    //todo: Add message to store
    dispatch(handleAddMessage(text, id));
    // console.log("New Message: ", text);

    //reset state to default
    this.setState(() => ({
      text: "",
    }));
  };

  render() {
    const { text } = this.state;
    const messageLeft = 280 - text.length;

    return (
      <div>
        <h3 className="center">Post A Message </h3>
        <form className="new-message" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happenning"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {/* show how many characters are left */}
          {messageLeft <= 100 && (
            <div className="message-length">{messageLeft}</div>
          )}

          {/* button is disabled if it's an empty string */}
          <button
            className="btn search-btn search-btn3"
            type="submit"
            disabled={text === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewMessage);
