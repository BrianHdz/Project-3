import React from "react";
import Nav from "../components/Nav/index";
import MessageContainer from "../components/Message/MessageContainer";
import "./homepageResizable.css";
import "./homepageGrid.css";
import "./homepageBoxStyle.css";
import SpotifyFavorites from "../components/SpotifyFavorites"

const Resizable = require("react-resizable").ResizableBox;
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

export default class TestLayout extends React.Component<
  {},
  { width: number, height: number }
> {
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
            className="custom-box box box-box3a"
            height={200}
            width={200}
            onResize={this.onResize}
            lockAspectRatio={true}
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

          <Resizable
            className="custom-box box box-box3b"
            height={200}
            width={200}
            onResize={this.onResize}
            lockAspectRatio={true}
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
          </Resizable>
          <div className="separator"></div>
          <div className="separator"></div>
          <MessageContainer />
          <div className="separator"></div>
          <div className="separator"></div>
          <SpotifyFavorites />
          
        </div>
      </div>
    );
  }
}