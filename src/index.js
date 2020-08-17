import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import "./robots";
import Card from "./Card";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";
import CardList from "./CardList";
import App from "./App";

const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
