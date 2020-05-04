import React from "react";
import Nav from "../components/Nav/index";
import MessageContainer from "../components/Message/MessageContainer";
import SpotifyFavorites from "../components/SpotifyFavorites";
import FavVideo from "../components/vids/FavVideo";
import "./homepage.css";

function HomePage() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container mt-1">
        <div className="row">
          <div className="col-md-7">
            <h3 className="content-header text-center">My Spotify Favorites</h3>
            <div className="row spotifyFavs-container">
              <SpotifyFavorites />
            </div>
            <h3 className="content-header text-center">My YouTube Favorites</h3>
            <div className="row videoFavs-container">
              <FavVideo />
            </div>
          </div>
          <div className="col-md-5">
            <MessageContainer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
