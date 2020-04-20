import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import ylogo from "../images/youtubes.png";
import slogo from "../images/spotifys.png";
import tlogo from "../images/twitters.png";
import Nav from "../components/Nav/index";
import { render } from "react-dom";


function HomePage() {

      return (
        
        <div>
          <Nav/>
          <div class="a"></div>
          <div>
            <StackGrid columnWidth={100} >
                  <div></div>
                  <div></div>
              <a href="http://localhost:3000/youtubePage"><button type="button">YouTube <img src={ylogo} alt="Logo"/></button></a>
                  <div></div>
                  <div></div>
                  <div></div>

              <a href="http://localhost:3000/spotifyPage"><button type="button">Spotify<img src={slogo} alt="Logo"/></button></a>
                  <div></div>
                  <div></div>
                  <div></div>

              <a href="http://localhost:3000/twitterPage"><button type="button">Twitter<img src={tlogo} alt="Logo"/></button></a>
                  <div></div>
            </StackGrid>
          </div>

{/*         <StackGrid columnWidth={50}>
          <div key="key1">Item 1</div>
          <div key="key2">Item 2</div>
          <div key="key3">Item 3</div>
        </StackGrid> */}
              </div>
     )
}


export default HomePage;

