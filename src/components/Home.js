import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="nav-container">
      <div className="nes-container is-dark is-rounded home-container">
        <nav>
          <Link to="/Survivor" className="nes-text is-warning">
            Survivor
          </Link>
          <Link to="/Killer" className="nes-text is-warning">
            Killer
          </Link>
        </nav>
        <img
          className="home-img"
          src={require("../assets/deathslinger.jpeg")}
          alt="deathslinger wallpaper"
        />
      </div>
    </div>
  );
};
