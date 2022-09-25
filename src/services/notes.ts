import axios from "axios";
import { noteType } from "../models/note.type";

const API_BASE = "https://stormy-brook-97359.herokuapp.com/api/notes";
//const API_BASE = "http://localhost:3001/api/notes";

const getConfig = () => {
  const storedAuth = window.sessionStorage.getItem("auth");
  const parseStoredAuth = storedAuth && JSON.parse(storedAuth);

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${parseStoredAuth.token}`,
    },
  };
};

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
  const config = getConfig();
  return axios
    .get(API_BASE, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error("Something went wrong getting notes");
    });
};
