import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/signup";
import "./app.css"
import HomePage from "./pages/homePage";
import SpotifyPage from "./pages/spotifyPage";
import YoutubePage from "./pages/youtubePage.js";
import hash from "./hash"


function App() {

  const [token, setToken] = useState("")
  
  
  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setToken(_token)
    }


  }, [])

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
                token1={token}
              />
            </Route>


            <Route exact path={"/spotifyPage"}>
              <SpotifyPage 
                token1={token}
              />
            </Route>


            <Route exact path={"/youtubePage"}>
              <YoutubePage />
            </Route>

            {/* <Route exact path={"/headnav"}>
              <Jumbo/>
            </Route> */}
{/* 
            <Route exact path={"/head2"}>
              <JumboNav/>
            </Route> */}


          </Switch>

        </div>
                  
      </Router>


    </div>
  );
}

export default App;
