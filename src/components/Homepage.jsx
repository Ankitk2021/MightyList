import React from "react";
import "./Homepage.css";

import Searchbar from "./Searchbar";
import Notes from "./Notes";
function Homepage() {

  return (
    <div className="parent">
      <Searchbar />
    
      <div className="fabBtn">
        <button>Add New</button>
      </div>

      <div className="note-container">

       
       
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
      </div>
    </div>
  );
}

export default Homepage;
