import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { json } from "stream/consumers";
import { authType } from "../models/auth";
import { credentialsType } from "../models/credentials";
import { postLogin } from "../services/login";
import { UseAuthType } from "./useAuth.types";

const INITIAL_DATA: authType = {
  authenticated: false,
  name: "",
  token: "",
  username: "",
};

export default function useAuth(): UseAuthType {
  const storedAuth = window.sessionStorage.getItem("auth");
  const parseStoredAuth = storedAuth ? JSON.parse(storedAuth) : INITIAL_DATA;
  const [auth, setAuth] = useState<authType>(parseStoredAuth);

  const { mutate, error } = useMutation(
    (credentials: credentialsType) => postLogin(credentials),
    {
      onSuccess: (data) => {
        console.log(
          "turboCL -> file: useAuth.ts -> line 25 -> useAuth -> data",
          data
        );
        window.sessionStorage.setItem(
          "auth",
          JSON.stringify({ ...data, authenticated: true })
        );
        setAuth({ ...data, authenticated: true });
      },
      onError: () => {
        window.sessionStorage.clear();
      },
    }
  );

  function login(credentials: credentialsType) {
    mutate(credentials);
  }

  return { auth, error, login };
}
