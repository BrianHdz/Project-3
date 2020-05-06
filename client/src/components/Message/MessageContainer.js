import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import "./message.css";

import LoadingBar from "react-redux-loading"; //importing the loading bar given by react-redux-loading

import Dashboard from "./Dashboard";
import MessageNav from "./MessageNav";

class MessageContainer extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="message-parent">
          <div className="message-child">
            <MessageNav />
            {this.props.loading === true ? null : (
              <div>
                <Dashboard />
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(MessageContainer);
