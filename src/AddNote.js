import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="col-sm-3">
      <div className="Note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a note..."
          onChange={handleChange}
          value={noteText}
        ></textarea>
        <div className="note-footer">
          <small>200 remaining</small>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
