import React, { Component } from "react";
import CharactersSection from "./Components/CharactersSection";
import "./App.css";

class App extends Component {
	state = {
		characters: [],
	};

	componentDidMount() {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => data.results)
			.then((characters) => {
				this.setState({ characters: characters });
			});
	}

	render() {
		return (
			<div className="App">
				<h1>Not another Rick and Morty App</h1>
				<CharactersSection characters={this.state.characters} />
			</div>
		);
	}
}

export default App;
