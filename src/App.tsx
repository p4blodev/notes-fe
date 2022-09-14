import CreateNote from "./components/CreateNote";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
      <h1>Notes</h1>
      <CreateNote />
      <Notes />
    </div>
  );
}

export default App;
