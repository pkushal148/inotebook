import React from "react";
import Notecontext from "../context/notes/NoteContext";
import { useContext } from "react";

const NoteItem = (props) => {
  const context = useContext(Notecontext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-sharp fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note Deleted successfully", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
