import React from "react";
import Nav from "../components/Nav/index";
import Index from "../components/YTlayout/Index";
import { Provider } from "../context";
import JumboNav from "../components/jumboNav"

function YoutubePage() {
  return (
    <Provider>
      <React.Fragment>
        {/* <Nav /> */}
        <JumboNav/>
        <div className="container">
          <Index />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default YoutubePage;
