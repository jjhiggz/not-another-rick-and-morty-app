import CharacterCard from "./CharacterCard";
import React from "react";
export default function CharactersSection(stuff) {
	return (
		<section id="characters-section">
			{stuff.characters.map((character) => {
				return <CharacterCard key={character.id} character={character} />;
			})}
		</section>
	);
}
