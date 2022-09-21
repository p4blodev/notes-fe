import CreateNote from "./components/CreateNote";
import Login from "./components/Login";
import "./App.css";
import Notes from "./components/Notes";
import useAuth from "./hooks/useAuth";

function App() {
  const { auth } = useAuth();

  return (
    <>
      <h1>Notes</h1>
      {auth.authenticated ? (
        <>
          <CreateNote />
          <Notes />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
