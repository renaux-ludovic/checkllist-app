import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <div className="home-container">

      <div className="menu">
      <h2>Choisis ta Thématique !</h2>
        <Link to="/list-1" className="button">
          Thématique 1
        </Link>

        <Link to="/list-2" className="button">
        Thématique 2
        </Link>

        <Link to="/list-3" className="button">
        Thématique 3
        </Link>

        <Link to="/list-4" className="button">
        Thématique 4
        </Link>
      </div>
    </div>
  );
}

export default Menu;
