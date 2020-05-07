import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/signup";
import "./app.css";
import HomePage from "./pages/homePage";
import SpotifyPage from "./pages/spotifyPage";
import YoutubePage from "./pages/youtubePage.js";
import hash from "./hash";

function App() {
  const [token, setToken] = useState("");
  const [redirectUri, setRedirectUri] = useState(
    "http://localhost:3000/homePage"
  );
  const [authEndpoint, setAuth] = useState(
    "https://accounts.spotify.com/authorize"
  );
  const [clientId, setClientId] = useState("3e0ec02d26d940389d29340b4da5bd88");
  const [scopes, setScopes] = useState([
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
  ]);

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setToken(_token);
    }
  }, []);

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
                authEndpoint={authEndpoint}
                clientId={clientId}
                scopes={scopes}
                redirectUri={redirectUri}
              />
            </Route>
            <Route exact path={"/spotifyPage"}>
              <SpotifyPage token1={token} />
            </Route>
            <Route exact path={"/youtubePage"}>
              <YoutubePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
