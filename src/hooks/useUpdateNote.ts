import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putNote } from "../services/notes";
import { noteType } from "../models/note.type";
import { UseCreateNoteType } from "./useUpdateNote.types";

export default function useUpdateNote(): UseCreateNoteType {
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation<noteType, string, noteType>(
    (note: noteType) => putNote(note),
    {
      onSuccess: async (newNote: noteType) => {
        const prevNotes = queryClient.getQueryData<noteType[]>(["notes"]) || [];

        const filteredNotes = prevNotes.filter(
          (current: noteType) => current.id !== newNote.id
        );

        filteredNotes.push(newNote);
        filteredNotes.sort((a, b) => a.id! - b.id!);

        queryClient.setQueryData<noteType[]>(["notes"], [...filteredNotes]);
      },
    }
  );

  function changeImportant(note: noteType) {
    const important = note.important ? false : true;
    const updatedNote = { ...note, important: important };

    mutate(updatedNote);
  }

  return { changeImportant, error };
}
