import axios from "axios";
import { credentialsType } from "../models/credentials.types";

const API_BASE = "https://stormy-brook-97359.herokuapp.com/api/login";

//const API_BASE = "http://localhost:3001/api/login";

export const postLogin = (credentials: credentialsType) => {
  return axios
    .post(API_BASE, credentials)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
