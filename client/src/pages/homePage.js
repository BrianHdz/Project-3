import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import ylogo from "../../public/youtube.png";
import slogo from "../../public/spotify.png";
import Nav from "../components/Nav/index";


function HomePage() {

  class MyComponent extends Component {
    render() {
      return (
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
      );
    }
  }

 /*  return (
   <div>
               <Nav/>
   </div>
  ); */
}

export default HomePage;




class MyComponent extends Component {
  render() {
    return (
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    );
  }
}