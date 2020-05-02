import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function SaveBtn(props) {
  const { handleBtnClick } = useContext(UserContext);
  return (
    <React.Fragment>
      <button
        onClick={handleBtnClick}
        className={`btn btn-dark btn-block`}
        {...props}
      >
        Save video to your homepage
      </button>
    </React.Fragment>
  );
}

export default SaveBtn;
