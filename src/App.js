import "./App.css";
import NotesList from "./NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "6/7/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "6/7/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "6/7/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-3">Note Taking App</h1>

        <NotesList notes={notes} handleAddNote={addNote} />
      </div>
    </div>
  );
};

export default App;
