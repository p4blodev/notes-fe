import React, { useEffect, useState } from "react";
import { AuthContextType } from "./AuthContext.types";
import { authType } from "../models/auth.types";

const INITIAL_DATA: authType = {
  authenticated: false,
  name: "",
  token: "",
  username: "",
};

const storedAuth = window.sessionStorage.getItem("auth");
const authenticaction = storedAuth ? JSON.parse(storedAuth) : INITIAL_DATA;

export const AuthContext = React.createContext<AuthContextType>({
  auth: authenticaction,
  setAuth: () => null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<authType>(authenticaction);

  useEffect(() => {
    window.sessionStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const values: AuthContextType = { auth: auth, setAuth: setAuth };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
