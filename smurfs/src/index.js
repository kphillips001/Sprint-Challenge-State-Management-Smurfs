import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import "./index.css";

import combinedReducer from './reducers/combineReducers';

import App from "./components/App";

const store = createStore(combinedReducer, applyMiddleware(thunk));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));