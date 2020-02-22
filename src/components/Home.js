import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <nav className="nes-container is-dark is-rounded">
      <Link to="/survivor">Survivor</Link>
      <Link to="/killer">Killer</Link>
    </nav>
  );
};
