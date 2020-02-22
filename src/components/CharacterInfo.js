import React from "react";

export const CharacterInfo = ({ theme, character }) => {
  return (
    <div>
      <h1 className={`nes-text is-${theme}`}>{character}</h1>
    </div>
  );
};
