import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/signup";
import HomePage from "./pages/homePage";
import SpotifyPage from "./pages/spotifyPage"
import YoutubePage from "./pages/youtubePage.js"
import "./App.css";
// import Nav from "./components/Nav/index";


function App() {
  return (
    <div className="App">



      <Router>
      <div>

        <Switch>

          <Route exact path={["/", "/signup"]}>
          <SignUp />
          </Route>

          <Route exact path={"/homepage"}>
            <HomePage />
          </Route>

          
          <Route exact path={"/spotifypage"}>
            <SpotifyPage/>
          </Route>

          
          <Route exact path={"/youtubepage"}>
            <YoutubePage/>
          </Route>

        </Switch>
      </div>
    </Router>


    </div>
  );
}

export default App;
