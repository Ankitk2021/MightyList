import "./Homepage.css";

import Searchbar from "./Searchbar";
import Notes from "./Notes";
import InputDialoge from "./InputDialoge";


function Homepage(props) {
  //var note = [];

  let notes = localStorage.getItem("notes");
  let noteList = [];
  let notesCurrList = JSON.parse(notes);

  if(notesCurrList){
    noteList = notesCurrList
  }else{
    noteList = [];
  }



  function ShowUi() {
    
  }

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
      
      {
        noteList.map(e=> {
          if(e){
            let id = Math.random();
            return <Notes title={e.title} desc={e.desc} key={e.title + id + e.desc} />
          }
        })
      }
     

      <InputDialoge hidd={props.hidd} sethidd={props.sethidd} />
    </div>
  );
}

export default Homepage;
