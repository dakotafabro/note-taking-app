import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    } else {
      alert("You have reached your character limit.");
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
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
          <small>{characterLimit - noteText.length} remaining</small>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
