import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/signup";

import HomePage from "./pages/homePage";
import SpotifyPage from "./pages/spotifyPage";
import YoutubePage from "./pages/youtubePage.js";




function App() {
  return (
    <div className="App">



      <Router>
        <div>

          <Switch>

            <Route exact path={["/", "/signup"]}>
              <SignUp />
            </Route>

            <Route exact path={"/homePage"}>
              <HomePage />
            </Route>


            <Route exact path={"/spotifyPage"}>
              <SpotifyPage />
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
