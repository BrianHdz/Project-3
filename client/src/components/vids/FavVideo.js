import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import API from "../../utils/api";

const FavVideo = () => {
  const [youtubeFavs, setYoutubeFavs] = useState([]);
  useEffect(() => {
    loadYoutubeFavs();
  }, []);

  const loadYoutubeFavs = () => {
    API.getYoutubeFavs()
      .then((res) => setYoutubeFavs(res.data))
      .catch((err) => console.log(err));
  };

  const deleteYoutubeFav = (id) => {
    API.deleteYoutubeFav(id)
      .then((res) => loadYoutubeFavs())
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      {youtubeFavs.map((youtubeFav) => {
        return (
          <div key={youtubeFav._id}>
            <div className="card mb-2 shadow-sm">
              <Iframe
                width="650"
                height="240"
                src={`http://www.youtube.com/embed/${youtubeFav.favorites} `}
                frameBorder="0"
                allowFullScreen
              />

              <button
                name={`${youtubeFav._id}`}
                className={`btn btn-dark btn-block`}
                data-value={`${youtubeFav._id}`}
                onClick={() => deleteYoutubeFav(youtubeFav._id)}
              >
                Delete Video From Favorites
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavVideo;
