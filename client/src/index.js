import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import * as serviceWorker from './serviceWorker';

//store stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers"; //importing the default export from index inside reducers folder

//importing middlewares
import middleware from "./middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
