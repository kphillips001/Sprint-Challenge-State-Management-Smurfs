import React from "react";
import {connect} from "react-redux";
import "./App.css";

import AddSmurf from './Forms/AddSmurf';
import Smurfs from './Smurfs/Smurfs';

const App = () => {

    return (
      <div className="App" >
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf />
        <Smurfs />
      </div>
    );
}

const mapToStateProps = state => {
    return {
      data: state.smurfData.data
    }
}

export default connect(mapToStateProps, {})(App);