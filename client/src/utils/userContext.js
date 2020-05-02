import React from "react";

const UserContext = React.createContext({
  favorites: [],
  handleBtnClick: () => {},
});

export default UserContext;
