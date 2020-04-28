import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg bg-dark"
      role="navigation"
    >
      <Link className="navbar-brand" to="/homePage">
        Societé
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
        <span className="sr-only">Toggle navigation</span>
      </button>
      <div className="collapse navbar-collapse navbarNavDropdown">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              to="/spotifyPage"
              className={
                window.location.pathname === "/spotifyPage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Spotify
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/youtubePage"
              className={
                window.location.pathname === "/youtubePage"
                  ? "nav-link active"
                  : "nav-link"
              }
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
