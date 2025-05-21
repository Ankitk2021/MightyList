import "./Homepage.css";

import Searchbar from "./Searchbar";
import Notes from "./Notes";
import InputDialoge from "./InputDialoge";
import Note from "./Note";
import { useState } from "react";

function Homepage(props) {
  //var note = [];

  const [list, setList] = useState([]);
  console.log(list);

  function fabBtn() {
    props.sethidd((v) => !v);
  }
  return (
    <div className="parent">
      <Searchbar />

      <div className="fabBtn">
        <button onClick={fabBtn} hidden={props.hidd}>
          Add New
        </button>
      </div>

      {list.map((e) => {
        return <Notes title={e.title} desc={e.desc} />;
      })}

      <InputDialoge
        hidd={props.hidd}
        setList={setList}
        sethidd={props.sethidd}
      />
    </div>
  );
}

export default Homepage;
