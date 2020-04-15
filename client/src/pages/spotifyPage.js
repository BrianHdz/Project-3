import React, {Component, useEffect, useState} from 'react';
// import './App.css';
import Spotify from "spotify-web-api-js"
import Nav from "../components/Nav/index"

const spotifyWebAPI = new Spotify();

class SpotifyPage extends Component {
  
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ?  true : false,
      nowPlaying: {
        name: "Not Checked",
        image: ""
      },
      featuredPlayLists: []
    }
    if(params.access_token) {
      spotifyWebAPI.setAccessToken([params.access_token])
    }
  }
   getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  
  getNowPlaying() {
    // setTimeout
    spotifyWebAPI.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: {
          name: response.item.name.name,
          image: response.item.album.images[0].url
        }
      })
    })
  }

  getFeatured() {

    spotifyWebAPI.getFeaturedPlaylists()
    .then((response) => {
      this.setState({
        featuredPlayLists: response.playlists
      })
      console.log(response.playlists.items)
      
    })
  }

render() {
  return (
    <div className="App">
        <Nav/>
      <a href="http://localhost:8888"><button>Log in with Spotify</button></a>
      <div> Now Playing: {this.state.nowPlaying.name}</div>
      <div><img style={{ width: 100}} src={this.state.nowPlaying.image}></img></div>
      <button onClick={() => this.getNowPlaying()}>Check Now Playing</button>
      <button onClick={() => this.getFeatured()}>Get Featured PlayLists!</button>
      {/* <div>Playlist name: {this.state.featuredPlayLists}</div> */}
{/* trying to figure out how to save an array of objects to state, may have to  */}
    </div>
  );
  }
}

export default SpotifyPage;
