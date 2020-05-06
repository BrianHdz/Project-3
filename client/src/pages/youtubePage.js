import React from "react";
import Index from "../components/YTlayout/Index";
import { Provider } from "../context";
import JumboNav from "../components/jumboNav";
import "./youtube.css";

function YoutubePage() {
  return (
    <Provider>
      <React.Fragment>
        {/* <Nav /> */}
        <JumboNav />
        <div className="container youtube-container">
          <Index />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default YoutubePage;
