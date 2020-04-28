import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import ylogo from "../images/youtubes.png";
import slogo from "../images/spotifys.png";
import Nav from "../components/Nav/index";
import MessageContainer from "../components/Message/MessageContainer";
import { render } from "react-dom";
import GridLayout from "react-grid-layout";

const Resizable = require("react-resizable").Resizable; // or,
const ResizableBox = require("react-resizable").ResizableBox;

// function HomePage() {
//   return (
//     <div>
//       <Nav />
//       <div className="a"></div>
//       <div>
//         <StackGrid columnWidth={100}>
//           <a href="http://localhost:3000/youtubePage">
//             <button type="button">
//               YouTube <img src={ylogo} alt="Logo" />
//             </button>
//           </a>
//           <div></div>

//           <a href="http://localhost:3000/spotifyPage">
//             <button type="button">
//               Spotify
//               <img src={slogo} alt="Logo" />
//             </button>
//           </a>
//           <div></div>

//           <MessageContainer />
//         </StackGrid>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

export default class TestLayout extends React.Component {
  state = { width: 200, height: 200 };

  //onClick = () => {
  //  this.setState({width: 200, height: 200});
  //};

  onResize = (event, { element, size, handle }) => {
    this.setState({ width: size.width, height: size.height });
  };

  render() {
    return (
      <div>
        {/*<button onClick={this.onClick} style={{'marginBottom': '10px'}}>Reset first element's width/height</button>*/}
        <div className="layoutRoot">
          <Nav />
          <div className="topseparator"></div>

          <ResizableBox
            className="box-box3a"
            height={this.state.height}
            width={this.state.width}
            onResize={this.onResize}
            lockAspectRatio={true}
            resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
          >
            <div
              className="box"
              style={{
                width: this.state.width + "px",
                height: this.state.height + "px",
              }}
            ></div>
            <a href="http://localhost:3000/youtubePage">
              <span className="text">{"YouTube"}</span>
            </a>
          </ResizableBox>
          <div className="separator"></div>

          <ResizableBox
            className="box-box3b"
            height={this.state.height}
            width={this.state.width}
            onResize={this.onResize}
            lockAspectRatio={true}
            resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
          >
            <div
              className="box"
              style={{
                width: this.state.width + "px",
                height: this.state.height + "px",
              }}
            ></div>
            <a href="http://localhost:3000/spotifyPage">
              <span className="text">{"Spotify"}</span>
            </a>
          </ResizableBox>
          <div className="separator"></div>

          <div className="separator"></div>
          <MessageContainer />
        </div>
      </div>
    );
  }
}
