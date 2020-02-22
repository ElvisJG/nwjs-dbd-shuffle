import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "../hooks/useParams";

export const Shuffle = () => {
  const choice = useParams();
  const [character, setCharacter] = useState(
    `Click to choose a random ${choice.charAt(0).toUpperCase() +
      choice.slice(1)}`
  );
  const killer = [
    "trapper",
    "wraith",
    "hillbilly",
    "nurse",
    "michael",
    "hag",
    "doctor",
    "huntress",
    "bubba",
    "freddy",
    "pig",
    "clown",
    "spirit",
    "legion",
    "plague",
    "ghost face",
    "demogorgon",
    "oni",
    "deathslinger"
  ];
  const survivor = [];
  const pickRandom = characters =>
    setCharacter(characters[Math.floor(Math.random() * characters.length)]);
  return (
    <div style={{ width: "100%" }}>
      <div className="nes-container">
        <div className="nes-container is-rounded is-dark is-centered with-title">
          <p style={{ textTransform: "capitalize" }} className="title">
            Shuffling {choice}'s
          </p>
          <button
            style={{ textTransform: "capitalize" }}
            onClick={() => pickRandom(choice === "killer" ? killer : survivor)}
            className="nes-btn is-primary"
          >
            Shuffle {choice}!
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {character === "spirit" && (
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "2rem 0"
                }}
                src={require("../assets/spirit.png")}
                alt="spooky spirit"
              />
            )}
            <h1 className="nes-text is-primary">{character}</h1>
          </div>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};
