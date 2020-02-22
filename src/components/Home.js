import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="nav-container">
      <nav className="nes-container is-dark is-rounded">
        <Link to="/Survivor" className="nes-text is-warning">
          Survivor
        </Link>
        <Link to="/Killer" className="nes-text is-warning">
          Killer
        </Link>
      </nav>
    </div>
  );
};
