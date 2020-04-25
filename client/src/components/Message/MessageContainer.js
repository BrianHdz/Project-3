import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import "./message.css";

import LoadingBar from "react-redux-loading"; //importing the loading bar given by react-redux-loading

import Dashboard from "./Dashboard";
import NewMessage from "./NewMessage";
import MessageModal from "./MessageModal";
import MessageNav from "./MessageNav";


class MessageContainer extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                {/* using a fragment so we don't add another element (div) to the DOM */}
                <Fragment>
                    <LoadingBar />
                    <div className="message-container">
                        <MessageNav />
                        {this.props.loading === true ? null : (
                            <div>
                                <Dashboard />
                                <Route path="/message/:id" component={MessageModal} />
                                <Route path="/new" component={NewMessage} />
                            </div>
                        )}
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    };
}

export default connect(mapStateToProps)(MessageContainer);