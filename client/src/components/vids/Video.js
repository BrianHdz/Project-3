import React from "react";
import Iframe from "react-iframe";
import API from "../../utils/api";

const Video = (props) => {
  console.log(props);
  const handleBtnClick = (e) => {
    const btnName = e.target.getAttribute("data-value");
    API.saveVideo({
      favorites: btnName,
    })
      .then(console.log("saved playlist"))
      .catch((err) => console.log(err));
    console.log(btnName);
  };
  const { video } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <Iframe
          width="540"
          height="315"
          src={`http://www.youtube.com/embed/${video.videoId} `}
          frameBorder="0"
          allowFullScreen
        />

        <button
          name={`${video.videoId}`}
          className={`btn btn-dark btn-block`}
          data-value={`${video.videoId}`}
          onClick={handleBtnClick}
        >
          Save Video to Favorites
        </button>
      </div>
    </div>
  );
};

export default Video;
