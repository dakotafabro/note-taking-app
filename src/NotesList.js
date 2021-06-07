import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="NotesList">
      <div className="row">
        {notes.map((note) => (
          <Note id={note.id} text={note.text} date={note.date} />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export default NotesList;
