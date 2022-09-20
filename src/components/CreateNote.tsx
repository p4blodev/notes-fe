import { useState } from "react";
import useCreateNote from "../hooks/useCreateNote";

export default function CreateNote() {
  const { createNote, error } = useCreateNote();
  const [note, setNote] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (note) createNote(note);
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setNote(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={note} onChange={onChangeInput} />
      <button>Add</button>
      {error && <span style={{ color: "red" }}>{`${error} 😢`}</span>}
    </form>
  );
}
