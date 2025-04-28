import React from "react";
import "./Navbar.css";
import "../assets/ham-menu.svg";
import logo from"../assets/logo.png";

function Navbar() {
  return (
    <>
      <div class="nav-container">
        <div className="logoandname">
        <img src={logo} alt="" />
        <h2>MightyNote</h2>
        </div>
        <div className="list-container">
          <ul>
            <li>Dashboard</li>
            <li>Notes</li>
            <li>You</li>
          </ul>
        </div>

        <div className="img-container">
        <img  src="https://img.icons8.com/fluency/48/menu-squared-2.png" alt="menu-squared-2"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
