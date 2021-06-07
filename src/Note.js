import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="col-sm-3">
      <div className="Note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
