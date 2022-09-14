import { noteType } from "../models/note.type";

export type UseCreateNoteType = {
  changeImportant: (note: noteType) => void;
  error: string | null;
};
