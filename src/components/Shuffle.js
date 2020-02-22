import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "../hooks/useParams";
import { useData } from "../data";

export const Shuffle = () => {
  const choice = useParams();
  const { characters } = useData();
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const pickRandom = c => setCharacter(c[Math.floor(Math.random() * c.length)]);
  const [character, setCharacter] = useState(
    `Click to choose a random ${cap(choice)}`
  );
  return (
    <div className="shuffle-container">
      <div className="nes-container">
        <div className="nes-container is-rounded is-dark is-centered with-title shuffle">
          <p className="title">Shuffling {cap(choice)}'s</p>
          <button
            onClick={() => pickRandom(characters[choice])}
            className="nes-btn is-primary"
          >
            Shuffle {cap(choice)}!
          </button>
          <div className="char-container">
            {character === "spirit" && (
              <img
                className="character"
                src={require("../assets/spirit.png")}
                alt="spooky spirit"
              />
            )}
            <h1 className="nes-text is-primary">{cap(character)}</h1>
          </div>
          <Link to="/" className="back">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};
