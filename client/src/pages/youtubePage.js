import React from "react";
import Nav from "../components/Nav/index";
import Navbar from '../components/YTlayout/YTNavbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../components/YTlayout/Index'
import { Provider } from '../context';

function YoutubePage() {
  return (

    <Provider>
      <Router>
        <React.Fragment>
          <Nav />
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/youtubePage' component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default YoutubePage;
