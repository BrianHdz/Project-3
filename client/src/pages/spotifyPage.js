import React, {Component, useEffect, useState} from 'react';
// import './App.css';
import Spotify from "spotify-web-api-js"
import Nav from "../components/Nav"
import Row from "../components/Row"
import Col from "../components/Col"

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
      featuredPlayLists: [],
      currentURI_ID: ""
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
      console.log(response)
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
      console.log(response)
      console.log(response.playlists.items)

      this.setState({
        featuredPlayLists: response.playlists.items
      })

    })
  }

  getId(key) {
    this.setState({
      currentURI_ID: "https://open.spotify.com/embed/playlist/"+ key
    })
  }


render() {
  return (
    <div>
      <Nav/>

      <Row>
        <Col className="mt-5 p-5" size="md-6">
          <div> Now Playing: 
          {this.state.nowPlaying.name === "" ? "" : this.state.nowPlaying.name}
          </div>
          <div><img style={{ width: 100}} src={this.state.nowPlaying.image}></img></div>
        </Col>
        <Col className="mt-5 p-5" size="md-6">
        <button onClick={() => this.getNowPlaying()}>Check Now Playing</button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 p-5" size="md-4">
          <button onClick={() => this.getFeatured()}>Get Featured PlayLists!</button>
        </Col>
        <Col className="mt-5 p-5" size="md-4">
          <div>Playlist name:</div>
          { this.state.featuredPlayLists.length > 1 ? this.state.featuredPlayLists.map(featuredItem => {
          return <div>{featuredItem.name}<button onClick={() => this.getId(featuredItem.id)} key={featuredItem.id} >play me!</button></div>;
          }) : ""}
          </Col>
          <Col className="mt-5 p-5" size="md-4">
            <iframe src={this.state.currentURI_ID} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
      </Row>
    </div>
  );
  }
}

export default SpotifyPage;