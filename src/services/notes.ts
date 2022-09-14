import axios from "axios";
import { noteType } from "../models/note.type";

const API_BASE = "http://localhost:3001/api/notes";

export const postNote = (note: noteType) => {
  return axios
    .post(API_BASE, note)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error("Something went wrong getting notes");
    });
};

export const putNote = (note: noteType) => {
  return axios
    .put(`${API_BASE}/${note.id}`, note)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error("Something went wrong getting notes");
    });
};

export const getNotes = () => {
  return axios
    .get(API_BASE)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error("Something went wrong getting notes");
    });
};
