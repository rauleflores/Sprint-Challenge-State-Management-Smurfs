import React, { Component } from "react";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="apph1Div">
					<h1 className="apph1">SMURFS! 2.0 W/ Redux</h1>
				</div>
				<SmurfForm />
				<Smurf />
			</div>
		);
	}
}

export default App;
