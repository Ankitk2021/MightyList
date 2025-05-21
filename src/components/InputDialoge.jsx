// import React, { useState } from "react";
import { useState } from "react";
import "./InputDialogue.css";
import Note from "./Note";

function InputDialoge(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  

  function spanClick() {
    props.sethidd((v) => !v);
  }

  function saveClick() {
    event.preventDefault();
    props.sethidd(p => !p)
    handleSubmit();
  }
  function handleTitleChange() {
    let v = event.target.value;
    setTitle(v);
  }
  function handleDescChange() {
    let v = event.target.value;
    setDesc(v);
  }
  function handleSubmit() {
    console.log(title, desc);
    props.setList(p=>[...p,{'title': title,'desc': desc}]);
   
  }

  return (
    <div
      className="dialgue-container"
      style={{ display: props.hidd ? "flex" : "none" }}
    >
      <div className="x-container">
        <span onClick={spanClick}>&#x2716;</span>
      </div>
      <p>Enter the details 📝</p>
      <form className="dialgue-container-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Write title about the note..🪄"
          />
        </div>

        <div>
          <label htmlFor="desc">Desc</label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            onChange={handleDescChange}
            value={desc}
            placeholder="Write the concise note.🙉"
          />
        </div>

        <button type="submit" onClick={saveClick}>
          Save
        </button>
      </form>
    </div>
  );
}

export default InputDialoge;
