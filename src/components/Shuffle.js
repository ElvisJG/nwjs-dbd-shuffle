import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CharacterInfo } from "./CharacterInfo";

export const Shuffle = ({ characters, side }) => {
  const shuffle = characters;
  const theme = side === "Killer" ? "error" : "success";
  const pickRandom = c => setCharacter(c[Math.floor(Math.random() * c.length)]);
  const [character, setCharacter] = useState(
    `Click to choose a random ${side}`
  );

  return (
    <div className="shuffle-container">
      <div className="nes-container main">
        <div className="nes-container is-rounded is-dark is-centered with-title">
          <p className="title">Shuffling {side}s</p>
          <button
            onClick={() => pickRandom(shuffle)}
            className={`nes-btn is-${theme}`}
          >
            Shuffle {side}!
          </button>
          <div className="char-container">
            <CharacterInfo character={character} theme={theme} />
          </div>
          <Link to="/" className={`nes-text is-${theme} back`}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};
