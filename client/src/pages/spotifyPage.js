import React, {Component, useEffect, useState} from 'react';
import './spotify.css';
import SpotifyPlayer from 'react-spotify-web-playback';
import Spotify from "spotify-web-api-js"
import Nav from "../components/Nav"
import Row from "../components/Row"
import Col from "../components/Col"
import Visualizer from '../components/Visualizer';
import API from "../utils/api";
import SpotifyFavorites from "../components/SpotifyFavorites"

const spotifyWebAPI = new Spotify();


class SpotifyPage extends Component {
  
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      // loggedIn: params.access_token ?  true : false,
      // nowPlaying: {
      //   name: "Not Checked",
      //   image: ""
      // },
      featuredPlayLists: [],
      currentURI_ID: "spotify:playlist:37i9dQZF1DWSNC7AjZWNry",
      search: "",
      searchedItems: [],
      savedItem: "",
      token: params.access_token,
      isPlaying: false
    }
    
    if(params.access_token) {
      
      spotifyWebAPI.setAccessToken([params.access_token])

    }    
  }

  handleInputChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      this.getSearch()
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
      // if(response.item.name.name === undefined) {
      //   return
      // }
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

  getSearch() {
    spotifyWebAPI.searchPlaylists(this.state.search, {limit: 10, market: "US"})
    .then((response) => {
      // console.log(response.tracks.items)

      console.log(response)

      this.setState({
        // searchedItems: response.tracks.items
        searchedItems: response.playlists.items
      })

    })
  }

  getId(key) {
    
    this.props.setToken(this.state.token)
    this.props.setCurrentURI(key);
      this.setState({
        currentURI_ID: key,
        isPlaying: true
      })
    }

  saveFavorites(key,key2) {
      API.createSpotify({
        uri:key,
        name:key2
      }).then(
        console.log("saved playlist"))
        
      .catch((err) => console.log(err));
  };

  playPlaylist = () => {
  //   spotifyWebAPI.getMyDevices().then((response) => console.log(response))
  }
    // spotifyWebAPI.play({"context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr"})
  
  playerUpdates = (ICallbackState) => {
    console.log("hi")
  }



  render() {
    return (
      <div>
        <Nav/>
      <div className="container-fluid" style={{height: 600}}>
      <Row>

        <Col style={{maxWidth: 200}} size="md-3" className="mt-3 p-3">
          <a href="https://spotifyapi1.herokuapp.com/"><button type="button" className="btn btn-dark">Log in with Spotify</button></a>
        </Col>

        <Col className="mt-3 p-3" size="md-3">
          
          <button type="button" className="btn btn-dark d-block mt-3" onClick={() => this.getFeatured()}>Get Featured PlayLists!</button>
              <div className="overflow-auto" style={{maxWidth: 400, maxHeight: 450}}>
                {this.state.featuredPlayLists.length > 1 ? this.state.featuredPlayLists.map(featuredItem => {
                return <li className="list-group-item">{featuredItem.name}<button type="button" className="btn btn-dark ml-2" onClick={() => this.getId(featuredItem.uri)} key={featuredItem.uri} key2={featuredItem.name} ><i class="fas fa-play"></i></button><button onClick={() => this.saveFavorites(featuredItem.uri, featuredItem.name)}  className="btn btn-primary"><i class="fas fa-save"></i></button></li>;
                }) : ""}
              </div>
        </Col>


        <Col style={{maxWidth: 400}} className="mt-3 p-3" size="md-3">
          
            <h2 className="text-light bg-dark p-2">Search for a Playlist</h2>
              <input onChange={this.handleInputChange} name="search" value={this.state.search}  className="form-control" type="text" placeholder="Search Playlist"></input>
                <button onClick={this.handleFormSubmit}  className="btn btn-dark">Click me to Search</button>
                <div className="overflow-auto" style={{maxHeight: 250}}>
                  { this.state.searchedItems.length > 1 ? this.state.searchedItems.map(searchedItems => {
                  return <li className="list-group-item">{searchedItems.name}<button type="button" className="btn btn-dark ml-1" onClick={() => this.getId(searchedItems.uri)} key={searchedItems.uri} key2={searchedItems.name} ><i className="fas fa-play"></i></button><button onClick={() => this.saveFavorites(searchedItems.uri, searchedItems.name)} className="btn btn-primary"><i class="fas fa-save"></i></button></li>}) : ""}
          </div>
        </Col>
        <Col className="mt-3 p-3" size="md-3">
        <SpotifyFavorites 

              />
        </Col>
      </Row>
      
        {/* <Row>
          <Col className="mt-3 p-3" size="md-4">
          {/* <iframe src={this.state.currentURI_ID} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
          {/* </Col>
        </Row>
        <Row> */}
          {/* <Col className="mt-5 p-5" size="md-4">
            <button type="button" className="btn btn-dark" onClick={() => this.getNowPlaying()}>Check Now Playing</button>
          </Col>
          <Col className="mt-5 p-5" size="md-4">
            <div> Now Playing: 
            </div>
            <div><img style={{ width: 100}} src={this.state.nowPlaying.image}></img></div>
          </Col> */}
        {/* </Row > */}

        <Row className="spotifyPlayer">
          <Col size="md-12">
        {/* <button onClick={this.playPlaylist} className="btn btn-dark">button</button> */}
        <SpotifyPlayer 
          token={this.state.token}
          uris={[this.props.currentURI]}
          autoPlay={true}
          showSaveIcon={true}
          play={true}
          // callback={this.playerUpdates}
          />
          </Col>
        </Row>
        
      
        </div>
      </div>
    );
    }
  }

export default SpotifyPage;