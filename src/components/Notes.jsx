import React from "react";
import "./Note.css";

function Notes() {
  return (
    <div className="notes-background">
      <div className="note">
        <p className="title">Birthday</p>

        <p className="desc">
          Today is my birthdaylorem20 Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore fugit porro fuga repellendus in alias
          molestiae? Delectus natus dolores eaque. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Aperiam soluta nam saepe quia nulla
          ipsum magni eius porro reprehenderit, eum qui quidem facere recusandae
          accusantium iusto fugiat in dolore consequatur.
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
