import React from "react";

const AddNote = () => {
  return (
    <div className="col-sm-3">
      <div className="Note new">
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a note..."
        ></textarea>
        <div className="note-footer">
          <small>200 remaining</small>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
