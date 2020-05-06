import React, {Component} from "react"
import "./style.css"
import {Link} from "react-router-dom"

const ESC_KEY_CODE = 'Escape';

const NavigationMenu = (props) => {
  const {
    navOpen,
    navIsAnimating,
    closeNav,
  } = props;
  const keyPressHandler = ({ key }) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [navOpen]);
  const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;
  return (
    <div className={`navigation-menu${classes}`}>
      <div className="wrap">
        <div className="cols">
          <div className="col col-left col-links">
            <ul className="links">
              <li className="link">
                <Link
                  to="/homePage"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Home
                </Link>
              </li>
              <li className="link">
                <Link
                  to="/spotifyPage"

                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                 Spotify
                </Link>
              </li> 
              <li className="link">
                <Link
                  to="/youtubePage"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col-right col-image">
            <img
              className="astro"
              src="http://www.sandboxthreads.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/o/boombox_1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = (props) => {
  const {
    navOpen,
    navIsAnimating,
    toggleNavHandler,
  } = props;
  return (
    <header
      className="header"
    >
      <div className="wrap">
        <button
          className={`nav-button${navIsAnimating ? ' is-animating' : ''}`}
          type="button"
          aria-label="Toggle Navigation"
          onClick={event => toggleNavHandler(event)}
        >
          <span className={`label--nav-closed${!navOpen ? ' active' : ''}`}>menu</span>
          <span className={`label--nav-open${navOpen ? ' active' : ''}`}>close</span>
        </button>
      </div>
    </header>
  );
};

export default class JumboNav extends React.Component {
  state = {
    navOpen: false,
    navIsAnimating: false,
  };

  toggleNav = (event) => {
    event.preventDefault();
    const { navOpen } = this.state;
    if (event) event.preventDefault();
    this.setState({
      navIsAnimating: true,
    });
    if (navOpen) document.body.classList.remove('nav-open');
    if (!navOpen) document.body.classList.add('nav-open');
    setTimeout(() => {
      this.setState({
        navIsAnimating: false,
        navOpen: !navOpen,
      });
    }, 500);
  };

  openNav = (event) => {
    if (event) event.preventDefault();
    document.body.classList.add('nav-open');
    this.setState({
      navOpen: true,
    });
  };

  closeNav = () => {
    document.body.classList.remove('nav-open');
    this.setState({
      navOpen: false,
    });
  };

  render() {
    const {
      navOpen,
      navIsAnimating,
    } = this.state;
    return (
      <div className="layout">
        <Header
          navOpen={navOpen}
          toggleNavHandler={event => this.toggleNav(event)}
          navIsAnimating={navIsAnimating}
          />
        <NavigationMenu
          navOpen={navOpen}
          navIsAnimating={navIsAnimating}
          closeNav={event => this.closeNav(event)}
          toggleNavHandler={event => this.toggleNav(event)}
          />
        <main className="page">
          <div className="wrap">
            <div className="title-section text-wrapper">
              <h1  className=" fancy jumbotron bg-dark">Societé</h1>
              <span className="p-2 author ">Your go to spot for all your media wants</span>
            </div>
          </div>
       
        </main>
      </div>
    );
  }
}
