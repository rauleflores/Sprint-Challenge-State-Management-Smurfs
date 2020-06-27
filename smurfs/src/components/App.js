import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurf } from "../actions";
import Smurf from "./Smurf";
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your state management version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
				<Smurf />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("App state:", state);
	return state;
};

export default connect(mapStateToProps)(App);
