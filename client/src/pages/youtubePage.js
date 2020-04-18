import React from "react";
import Nav from "../components/Nav/index";
import Navbar from '../components/YTlayout/YTNavbar'
import Index from '../components/YTlayout/Index'
import { Provider } from '../context';

function YoutubePage() {
  return (

    <Provider>

        <React.Fragment>
          <Nav />
          <Navbar />
          <div className='container'>
        <Index/>
          </div>
        </React.Fragment>

    </Provider>
  );
}

export default YoutubePage;
