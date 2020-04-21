import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Societé
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/homePage"
              className={
                window.location.pathname === "/homePage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/spotifyPage"
              className={window.location.pathname === "/spotifyPage" ? "nav-link active" : "nav-link"}
            >
              Spotify
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/youtubePage"
              className={window.location.pathname === "/youtubePage" ? "nav-link active" : "nav-link"}
            >
              Youtube
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
