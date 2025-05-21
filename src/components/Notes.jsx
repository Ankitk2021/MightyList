import React from "react";
import "./Note.css";

function Notes(props) {

  console.log(props.title)
  return (
    <div className="notes-background">
      <div className="note">
        <p className="title">{props.title}</p>

        <p className="desc">
        {props.desc}
        </p>
      </div>
      <div className="checkbox-container">
        <label>
          <input type="checkbox" />
          <span class="custom-checkbox"></span>
        </label>
      </div>
    </div>
  );
}

export default Notes;
