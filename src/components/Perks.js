import React from "react";
import { useParams } from "../hooks/useParams";

export const Perks = ({ perks }) => {
  console.log(perks);
  const side = useParams();
  return (
    <div className="perks-container">
      {perks.map(perk => (
        <img
          key={perk}
          className="character"
          src={require(`../assets/characters/${side.toLowerCase()}/perks/${perk}.png`)}
          alt={perk}
        />
      ))}
    </div>
  );
};
