import React from "react";

export const CharacterImg = ({ character }) => {
  return (
    <img
      className="character"
      src={require(`../assets/${character}.png`)}
      alt={character}
    />
  );
};
