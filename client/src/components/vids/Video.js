import React from "react";
import Iframe from "react-iframe";
import SaveBtn from "../SaveBtn/SaveBtn";

const Video = (props) => {
  const { video } = props;
  console.log(video);
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <Iframe
          width="550"
          height="315"
          src={`http://www.youtube.com/embed/${video.videoId} `}
          frameBorder="0"
          allowFullScreen
        />

        <SaveBtn data-vale={`${video.videoId}`}>
          Save this Video to your homepage
        </SaveBtn>
      </div>
    </div>
  );
};

export default Video;
