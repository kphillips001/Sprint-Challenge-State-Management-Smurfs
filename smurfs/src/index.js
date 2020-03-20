import React from "react";
import ReactDOM from "react-dom";
import { createstore, applymiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";



ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById("root"));
