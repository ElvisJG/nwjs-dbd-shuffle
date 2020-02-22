import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="nav-container">
      <nav className="nes-container is-dark is-rounded">
        <Link to="/survivor">Survivor</Link>
        <Link to="/killer">Killer</Link>
      </nav>
    </div>
  );
};
