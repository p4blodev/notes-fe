import CreateNote from "./components/CreateNote";
import Login from "./components/Login";
import "./App.css";
import Notes from "./components/Notes";
import useAuth from "./hooks/useAuth";

function App() {
  const { error, auth } = useAuth();
  console.log("turboCL -> file: App.tsx -> line 9 -> App -> auth", { ...auth });
  console.log(
    "turboCL -> file: App.tsx -> line 9 -> App -> auth.authenticated",
    auth.authenticated
  );
  console.log("turboCL -> file: App.tsx -> line 9 -> App -> error", error);

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
