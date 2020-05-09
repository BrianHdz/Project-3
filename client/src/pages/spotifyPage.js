import React, { Component } from "react";
import "./spotify.css";
import Spotify from "spotify-web-api-js";
import Row from "../components/Row";
import Col from "../components/Col";
import Visualizer from "../components/Visualizer";
import API from "../utils/api";
import JumboNav from "../components/jumboNav/index";
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "3e0ec02d26d940389d29340b4da5bd88";

const redirectUri = "https://polar-brushlands-16053.herokuapp.com/spotifyPage";
// const redirectUri = "http://localhost:3000/spotifyPage";
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
];

const spotifyWebAPI = new Spotify();

class SpotifyPage extends Component {
  constructor() {
    super();
    this.state = {  
      nowPlaying: {
        name: "Not Checked",
        image: "",
      },
      featuredPlayLists: [],
      currentURI_ID: "37i9dQZF1DWSNC7AjZWNry",
      search: "",
      searchedItems: [],
      savedItem: "",
      type: "playlist"
      
    };
    
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getPlaylist();
  };

  handleFormSubmit2 = (event) => {
    event.preventDefault();
    this.getTrack();
  };

  handleFormSubmit3 = (event) => {
    event.preventDefault();
    this.getAlbum();
  };

  handleFormSubmit4 = (event) => {
    event.preventDefault();
    this.getArtist();
  };

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying() {
    spotifyWebAPI.getMyCurrentPlaybackState().then((response) => {
      console.log(response);
      this.setState({
        nowPlaying: {
          name: response.item.name.name,
          image: response.item.album.images[0].url,
        },
      });
    });
  }

  getFeatured() {

    spotifyWebAPI.getFeaturedPlaylists().then((response) => {
      this.setState({
        featuredPlayLists: response.playlists.items,
      });
    });
  }

  getPlaylist() {

    spotifyWebAPI
      .searchPlaylists(this.state.search, { limit: 10, market: "US" })
      .then((response) => {
        console.log(response)
        this.setState({
          searchedItems: response.playlists.items,
        });
      });
  }

  getTrack() {

    spotifyWebAPI
      .searchTracks(this.state.search, { limit: 10, market: "US" })
      .then((response) => {
        console.log(response)
        this.setState({
          searchedItems: response.tracks.items,
        });
      });
  }

  getAlbum() {

    spotifyWebAPI
      .searchAlbums(this.state.search, { limit: 10, market: "US" })
      .then((response) => {
        console.log(response)
        this.setState({
          searchedItems: response.albums.items,
        });
      });
  }

  getArtist() {

    spotifyWebAPI
      .searchArtists(this.state.search, { limit: 10, market: "US" })
      .then((response) => {
        console.log(response)
        this.setState({
          searchedItems: response.artists.items,
        });
      });
  }

  getId(key, key3) {
    this.setState({
      currentURI_ID: key,
      type: key3
    });
  }

  saveFavorites(key, key2, key3) {
    API.createSpotify({
      uri: key,
      name: key2,
      type: key3
    })
      .then(console.log("saved playlist"))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <JumboNav />
        </div>
        <Row className="text-center spotify-login">
          <a
            className=" ml-5 p-2"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            <h2 className="text-center login-logo">
              <i class="fab fa-spotify"></i>
            </h2>
          </a>
        </Row>
        <div className="container">
          <Row>
            <Col className="mt-2 p-2" size="md-4">
              <button
                style={{width:375}}
                type="button"
                className="btn3 btn-three d-block mt-3"
                onClick={() => this.getFeatured()}
              >
                Click me for featured playlists!
              </button>
              <div
                className="overflow-auto"
                style={{ maxWidth: 375, maxHeight: 450 }}
              >
                {this.state.featuredPlayLists.length > 1
                  ? this.state.featuredPlayLists.map((featuredItem) => {
                      return (
                        <li className="list-group-item spotify-playlist">
                          {featuredItem.name}
                          <button
                            type="button"
                            className="btn btn-dark ml-2"
                            onClick={() => this.getId(featuredItem.id, featuredItem.type)}
                            key={featuredItem.id}
                            key2={featuredItem.name}
                            key3={featuredItem.type}
                          >
                            <i class="fas fa-play"></i>
                          </button>
                          <button
                            onClick={() =>
                              this.saveFavorites(
                                featuredItem.id,
                                featuredItem.name,
                                featuredItem.type
                              )
                            }
                            className="btn btn-primary"
                          >
                            <i class="fas fa-save"></i>
                          </button>
                        </li>
                      );
                    })
                  : ""}
              </div>
            </Col>
            <Col style={{ width: 375 }} className="mt-2 p-2" size="md-4">
              <h2 className="search text-light text-center p-2">
                Search
              </h2>
              <input 
                onChange={this.handleInputChange}
                name="search"
                value={this.state.search}
                className="form-control"
                type="text"
                placeholder="Search Me"
              ></input>
              <button style={{ width: 355 }}
                onClick={this.handleFormSubmit}
                className="btn3 btn-three"
              >
                Search for a Playlist
              </button>
              <button style={{ width: 355 }}
                onClick={this.handleFormSubmit2}
                className="btn3 btn-three"
              >
                Search for a Track
              </button>
              <button style={{ width: 355 }}
                onClick={this.handleFormSubmit3}
                className="btn3 btn-three"
              >
                Search for a Album
              </button>
              <button style={{ width: 355 }}
                onClick={this.handleFormSubmit4}
                className="btn3 btn-three"
              >
                Search for a Artist
              </button>
              <div className="overflow-auto" style={{ maxHeight: 240 }}>
                {this.state.searchedItems.length > 1
                  ? this.state.searchedItems.map((searchedItems) => {
                      return (
                        <li className="list-group-item spotify-playlist">
                          {searchedItems.name}
                          <button
                            type="button"
                            className="btn btn-dark ml-1"
                            onClick={() => this.getId(searchedItems.id, searchedItems.type)}
                            key={searchedItems.id}
                            key2={searchedItems.name}
                            key3={searchedItems.type}
                          >
                            <i className="fas fa-play"></i>
                          </button>
                          <button
                            onClick={() =>
                              this.saveFavorites(
                                searchedItems.id,
                                searchedItems.name,
                                searchedItems.type
                              )
                            }
                            className="btn btn-primary"
                          >
                            <i class="fas fa-save"></i>
                          </button>
                        </li>
                      );
                    })
                  : ""}
              </div>
            </Col>
            <Col className="mt-2 p-2" size="md-4">
              <iframe
                src={`https://open.spotify.com/embed/${this.state.type}/${this.state.currentURI_ID}`}
                width="400"
                height="300"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SpotifyPage;
