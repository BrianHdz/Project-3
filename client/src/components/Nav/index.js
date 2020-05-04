import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/core/Menu"

// const useStyles = makeStyles


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const classes = useStyles();
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

/* <AppBar position="static">
  <Toolbar>
 
    <IconButton 
    aria-label="menu"
    color="default"
    className={classes.menuButton}
    ref={anchorRef}
    aria-controls={open ? 'menu-list-grow' : undefined}
    aria-haspopup="true"
    onClick={handleToggle}
    > Societé
    <MenuIcon />
          
    </IconButton>
    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Home Page<Link to ="/homePage"></Link></MenuItem>
                    <MenuItem onClick={handleClose}>Spotify</MenuItem>
                    <MenuItem onClick={handleClose}>Youtube</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    
    {/* <Button color="inherit">Login</Button> */
//   </Toolbar>
// </AppBar> */}



  );
}

export default Nav;
