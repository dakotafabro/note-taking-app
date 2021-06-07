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
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "6/7/2021",
    },
    {
      id: nanoid(),
      text: "This is my fifth note",
      date: "6/7/2021",
    },
    {
      id: nanoid(),
      text: "This is my sixth note",
      date: "6/7/2021",
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-3">Note Taking App</h1>

        <NotesList notes={notes} />
      </div>
    </div>
  );
};

export default App;
