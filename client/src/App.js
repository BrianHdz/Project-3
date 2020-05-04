import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/signup";
import "./app.css"
import HomePage from "./pages/homePage";
import SpotifyPage from "./pages/spotifyPage";
import YoutubePage from "./pages/youtubePage.js";
import ReactMediaVisualizer from './components/Visualizer'
import Main from './components/Main/index.js'
import Navbar from './components/Navbar/index.js'
import SpotifyPlayer from 'react-spotify-web-playback';




function App() {

  
  const [currentURI, setCurrentURI] = useState("spotify:playlist:37i9dQZF1DWSNC7AjZWNry")
  const [token, setToken] = useState("")


  return (
    <div className="App">
      <Router>
        <div>

          <Switch>

            <Route exact path={["/", "/signup"]}>
              <SignUp />
            </Route>

            <Route exact path={"/homePage"}>
              <HomePage
                token={token}
                setCurrentURI={setCurrentURI}
                setToken={setToken}
                currentURI={currentURI} />
            </Route>


            <Route exact path={"/spotifyPage"}>
              <SpotifyPage 
              setCurrentURI={setCurrentURI}
              setToken={setToken}
              currentURI={currentURI} />
            </Route>


            <Route exact path={"/youtubePage"}>
              <YoutubePage />
            </Route>

          </Switch>
        </div>
      </Router>
{/* 
      <SpotifyPlayer 
          token={token}
          uris={[currentURI]}
          autoPlay={true}
          showSaveIcon={true}
          play={true}
          /> */}

    </div>
  );
}

export default App;
