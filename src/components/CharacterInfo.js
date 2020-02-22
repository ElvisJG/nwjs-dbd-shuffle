import React from "react";
import { Perks } from "./Perks";

export const CharacterInfo = ({ theme, character, perks }) => {
  console.log(character);
  return (
    <div className="info-container">
      <h1 className={`nes-text is-${theme}`}>{character}</h1>
      <Perks perks={perks[character]} />
    </div>
  );
};
