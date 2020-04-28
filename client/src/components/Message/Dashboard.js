import React, { Component } from "react";
import { connect } from "react-redux";

import Message from "./Message";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <hr />
        <h3 className="text-center">Your Timeline</h3>
        <ul className="dashbord-list">
          {this.props.messagesIds.map((id) => (
            <li key={id}>
              {/* <div>MESSAGE ID: {id} </div> */}
              <Message id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//destructuring messages from state
function mapStateToProps({ messages }) {
  return {
    messagesIds: Object.keys(messages).sort(
      //sorting from the newest to the oldest message
      //If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
      (a, b) => messages[b].timestamp - messages[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
