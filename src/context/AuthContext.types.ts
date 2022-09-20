import { authType } from "../models/auth.types";

export type AuthContextType = {
  auth: authType;
  setAuth: React.Dispatch<React.SetStateAction<authType>>;
};
