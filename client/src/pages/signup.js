import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import AuthRoute from "../components/LogIn/index.js";
import API from "../utils/api";

// ColorButton keeps Sing In button from turning Green
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

// theme and createMuiTheme turn the Sign Up button green.
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const [userLastName, setUserLastName] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userEmail, setUserEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [loginEmail, setLoginEmail] = useState();

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      "Form Values",
      userFirstName,
      userLastName,
      userPassword,
      userEmail
    );

    API.createUser({
      first: userFirstName,
      last: userLastName,
      password: userPassword,
      email: userEmail,
    })
      .then(console.log("saved user"))
      .then(window.location.replace("/homePage"))
      .catch((err) => console.log(err));
  };


  const handleSignIn = (event) => {
    event.preventDefault();

    var userData = {
      email: loginEmail,
      password: loginPassword
    }

    // Use "logon" for account.js or "signIn" for userController.js
    API.signIn({
      email: loginEmail,
      password: loginPassword
    }).then(function (res){
    console.log(res.data)
    if (res.data === "Log in successfull"){
      window.location.replace("/homePage")
      // "/homePage"
    }
    
  })
    // If there is no email or password input values, return alert.
    if (!userData.email || !userData.password) {
      return alert("You must enter both a valid E-mail & Password");
    }
    console.log("Logging in with form values: " + userData.email)
    // Otherwise we run the loginUser function.
    loginUser(userData.email, userData.password);

  };

  function loginUser(email, password) {
    console.log(email, password)
  };


  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in if you have an account.
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <AuthRoute></AuthRoute>
                Log In
            </ColorButton>

            {/* ColorButton */}
            {/* AuthRoute */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up for an account below :
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setUserFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => setUserLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <ThemeProvider theme={theme}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              // href="/homePage"
              >Sign Me Up
              </Button>
            </ThemeProvider>
            <Grid container justify="flex-end"></Grid>
          </form>
        </div>

      </Grid>
    </Grid >
  )
}







// class ColorButton extends React.Component {
//   handleSignIn = (event) => {
//     event.preventDefault();

//     var userData = {
//       email: loginEmail,
//       password: loginPassword
//     }

//     // Use "logon" for account.js or "signIn" for userController.js
//     API.signIn({
//       email: loginEmail,
//       password: loginPassword
//     })
//     // If there is no email or password input values, return alert.
//     if (!userData.email || !userData.password) {
//       return alert("You must enter both a valid E-mail & Password");
//     }
//     console.log("Logging in with form values: " + userData.email)


//     state = {
//       toHomePage: false,
//     }
//     // Otherwise we run the loginUser function.
//     handleLoginUser = (user) => {
//       saveUser(user)
//         .then(() => this.setState(() => ({
//           toHomePage: true
//         })))
//     },
//       render() {
//       if (this.state.toHomePage === true) {
//         <Redirect to='/homePage' />
//       }
//     }
//   }