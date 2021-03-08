import React from "react";
export default function CharacterCard(props) {
	return (
		<div className="character-card">
			<img src={props.character.image} alt={props.character.name} />
			<h2>{props.character.name}</h2>
		</div>
	);
}
