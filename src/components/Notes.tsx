import useGetNotes from "../hooks/useGetNotes";
import Note from "./Note";

export default function Notes() {
  const { isLoading, error, notes } = useGetNotes();

  if (isLoading)
    return (
      <p>
        <strong>Loading</strong>
      </p>
    );

  if (error) return <p style={{ color: "red" }}>{`${error} 😢`}</p>;

  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
}
