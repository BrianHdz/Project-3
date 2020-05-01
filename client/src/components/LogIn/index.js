import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isAuthUser, type } = props;
  console.log(props + "from the logIN button")
  if (type === "guest" && isAuthUser) return <Redirect to="/homePage" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

  return <Route {...isAuthUser} />;
};

const mapStateToProps = ({ ...props }) => ({
    
});

export default connect(mapStateToProps)(AuthRoute);