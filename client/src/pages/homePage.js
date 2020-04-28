import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import ylogo from "../images/youtubes.png";
import slogo from "../images/spotifys.png";
import tlogo from "../images/twitters.png";
import Nav from "../components/Nav/index";
import MessageContainer from "../components/Message/MessageContainer";
import { render } from "react-dom";
import GridLayout from "react-grid-layout";
import Spotify from "spotify-web-api-js"

const Resizable = require('react-resizable').Resizable; // or,
const ResizableBox = require('react-resizable').ResizableBox;
const spotifyWebAPI = new Spotify();


/*function HomePage() {


  return (
    /* <div>
      <Nav />
      <div class="a"></div>
      <div>
        <StackGrid columnWidth={100} >
 
          <a href="http://localhost:3000/youtubePage"><button type="button">YouTube <img src={ylogo} alt="Logo" /></button></a>
          <div></div>

          <a href="http://localhost:3000/spotifyPage"><button type="button">Spotify<img src={slogo} alt="Logo" /></button></a>
          <div></div>

          <MessageContainer />
        </StackGrid>
      </div>

      /*         <StackGrid columnWidth={50}>
          <div key="key1">Item 1</div>
          <div key="key2">Item 2</div>
          <div key="key3">Item 3</div>
        </StackGrid> *//*
    </div> *//*
    )
}


export default HomePage;*/





export default class TestLayout extends React.Component<{}, {width: number, height: number}> {
  state = {width: 200, height: 200};

  onClick = () => {
    this.setState({width: 200, height: 200});
  };

  onResize = (event, {element, size, handle}) => {
    this.setState({width: size.width, height: size.height});
  };

  playPlaylist = () => {
    spotifyWebAPI.play({"context_uri": "spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"})
  }

  render() {
    return (
      <div>
        <Nav/>
        <button onClick={this.onClick} style={{'marginBottom': '10px'}}>Reset first element's width/height</button>
        <div className="layoutRoot"> 
          {/* <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <div className="box" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
              <span className="text">{"Raw use of <Resizable> element. 200x200, all Resize Handles."}</span>
            </div> */}
          {/* </Resizable> */}
          <ResizableBox className="box box-box3a" width={200} height={200}>
            {/* <span className="text">{"<ResizableBox>"}</span> */}
          </ResizableBox>

          <ResizableBox className="box box-box3b" width={200} height={200}>
            {/* <span className="text">{"<ResizableBox>"}</span> */}
          </ResizableBox>

          <ResizableBox className="box" width={400} height={400}>
            {/* {<iframe src={"https://open.spotify.com/embed/playlist/37i9dQZF1DX8ymr6UES7vc"} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>} */}
           
            {/* <button className="btn btn-dark">button</button>
             */}
               <a href="https://spotifyapi1.herokuapp.com/"><button type="button" className="btn btn-dark">Log in with Spotify</button></a>
          </ResizableBox>


          <ResizableBox className="box" width={400} height={400}>
            <button onClick={this.playPlaylist} className="btn btn-dark">button</button>
          </ResizableBox>

            <MessageContainer/>
          {/* <ResizableBox
            className="custom-box box"
            width={200}
            height={200}
            handle={<span className="custom-handle custom-handle-se" />}
            handleSize={[8, 8]}>
            <span className="text">{"<ResizableBox> with custom handle in SE corner."}</span>
          </ResizableBox>
          <ResizableBox
            className="custom-box box"
            width={200}
            height={200}
            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
            handleSize={[8, 8]}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <span className="text">{"<ResizableBox> with custom handles in all locations."}</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} draggableOpts={{grid: [25, 25]}}>
            <span className="text">Resizable box that snaps to even intervals of 25px.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
            <span className="text">Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</span>
          </ResizableBox>
          <ResizableBox className="box box3" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
            <span className="text">Resizable box with a handle that only appears on hover.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} lockAspectRatio={true}>
            <span className="text">Resizable square with a locked aspect ratio.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={120} lockAspectRatio={true}>
            <span className="text">Resizable rectangle with a locked aspect ratio.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="x">
            <span className="text">Only resizable by "x" axis.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="y">
            <span className="text">Only resizable by "y" axis.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="both">
            <span className="text">Resizable ("both" axis).</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="none">
            <span className="text">Not resizable ("none" axis).</span>
          </ResizableBox> */}
        </div>
      </div>
    );
  }
}