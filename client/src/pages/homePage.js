import React from "react";
import MessageContainer from "../components/Message/MessageContainer";
import SpotifyFavorites from "../components/SpotifyFavorites";
import FavVideo from "../components/vids/FavVideo";
import "./homepage.css";
import JumboNav from "../components/jumboNav";

export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "3e0ec02d26d940389d29340b4da5bd88";

const redirectUri = "https://polar-brushlands-16053.herokuapp.com/homePage";
// const redirectUri = "http://localhost:3000/homePage";
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
];

function HomePage() {
  return (
    <React.Fragment>
      <JumboNav />
      <div className="container home-container">
        <div className="row">
          <a
            className="btn btn--loginApp-link col-md-2"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            <h2 className="text-center content-header">Log into Spotify</h2>
          </a>
          <div className="col-md-5">
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
