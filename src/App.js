import "./App.css";
import NotesList from "./NotesList";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Note Taking App</h1>

        <NotesList />
      </div>
    </div>
  );
};

export default App;
