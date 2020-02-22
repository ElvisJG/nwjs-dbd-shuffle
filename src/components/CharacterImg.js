import React from "react";

export const CharacterImg = ({ character, side }) => {
  return (
    <div className="image-container">
      {!character.includes("random") && (
        <img
          className="character"
          src={require(`../assets/characters/${side.toLowerCase()}/image/${character}.png`)}
          alt={character}
        />
      )}
    </div>
  );
};
