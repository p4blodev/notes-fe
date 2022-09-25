import { CreateNote } from "./components/createNote";
import Login from "./components/login/Login";
import "./App.css";
import Notes from "./components/Notes";
import useAuth from "./hooks/useAuth";
import Title from "./components/Title";

function App() {
  const { auth } = useAuth();

  return (
    <main className="app-container">
      <Title />
      {auth.authenticated ? (
        <>
          <CreateNote />
          <Notes />
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
