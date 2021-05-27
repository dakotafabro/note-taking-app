import React from "react";
import Note from "./Note";

const NotesList = () => {
  return (
    <div className="NotesList">
      <div className="row">
        <div className="col-sm-3">
          <Note />
        </div>
      </div>
    </div>
  );
};

export default NotesList;
