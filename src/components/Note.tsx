import { noteType } from "../models/note.type";
import useUpdateNote from "../hooks/useUpdateNote";

export default function Note({ note }: { note: noteType }) {
  const { error, changeImportant } = useUpdateNote();

  if (error) return <p style={{ color: "red" }}>{`${error} 😢`}</p>;

  const handleClick = () => {
    changeImportant(note);
  };

  return (
    <li>
      {note.content}
      {note.important ? "👆" : "👇"}
      <button onClick={handleClick}>Change Important</button>
    </li>
  );
}
