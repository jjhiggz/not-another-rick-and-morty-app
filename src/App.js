import React, { Component } from "react";
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
				<section id="characters-section">
					{this.state.characters.map((character, index) => {
						return (
							<div className="character-card" key={index}>
								<img src={character.image} alt={character.name} />
								<h2>{character.name}</h2>
							</div>
						);
					})}
				</section>
			</div>
		);
	}
}

export default App;
