import React from "react";
import "./Navbar.css";
import "../assets/ham-menu.svg";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logoandname">
          <img src={logo} alt="" hidden />
          <h2>NoteBook</h2>
        </div>

        <div className="list-img-container">
          <div className="list-container">
            <ul>
              <li>Dashboard</li>
              <li>Notes</li>
              <li>You</li>
            </ul>
          </div>

          <div className="img-container">
            <img
              height="28"
              src="https://img.icons8.com/fluency/48/tasks--v2.png"
              alt="tasks--v2"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
