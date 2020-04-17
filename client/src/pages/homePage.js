import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import ylogo from "../images/youtube .png";
import slogo from "../images/spotify.png";
import Nav from "../components/Nav/index";
import { render } from "react-dom";


function HomePage() {

      return (
        <div>
          <Nav/>
        <StackGrid columnWidth={150}>

          <div key="key1">Youtube</div>
            <img src={ylogo} alt="Logo"/>
                <div onMouseDown={ e => e.stopPropagation() }>
         </div>

          <div key="key2">Spotify</div>
            <img src={slogo} alt="Logo"/>  
              <div onMouseDown={ e => e.stopPropagation() }>

                  </div>
        </StackGrid>

          <StackGrid columnWidth={50}>
        <div key="key1">Item 1</div>
        <div key="key3">Item 3</div>
        </StackGrid>
              </div>
     )
}


export default HomePage;

