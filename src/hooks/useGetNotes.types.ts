import { noteType } from "../models/note.type";
export type UseGetNotesType = {
  error: string | null;
  isLoading: boolean;
  notes: noteType[];
};
