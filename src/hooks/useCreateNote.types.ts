import { noteType } from "../models/note.type";

export type UseCreateNoteType = {
  createNote: (note: string) => void;
  error: string | null;
  newNote?: noteType;
};
