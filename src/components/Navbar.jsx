import React from "react";
import "./Navbar.css";
import "../assets/ham-menu.svg";
import "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div class="nav-container">
        <h2>MightyNote</h2>
        <div className="list-container">
          <ul>
            <li>Dashboard</li>
            <li>Notes</li>
            <li>You</li>
          </ul>
        </div>

        <div className="img-container">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/menu--v1.png"
            alt="menu--v1"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
