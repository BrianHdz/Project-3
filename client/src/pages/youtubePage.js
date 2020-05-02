import React from "react";
import Nav from "../components/Nav/index";
import Navbar from "../components/YTlayout/YTNavbar";
import Index from "../components/YTlayout/Index";
import API from "../utils/api";
import { Provider } from "../context";

function YoutubePage() {
  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    console.log(btnName);
    API.saveVideo({
      favorites: btnName,
    }).then(console.log("saved video"));
  }

  return (
    <Provider value={{ handleBtnClick }}>
      <React.Fragment>
        <Nav />
        <Navbar />
        <div className="container">
          <Index />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default YoutubePage;
