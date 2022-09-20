import { authType } from "../models/auth";
import { credentialsType } from "../models/credentials";

export type UseAuthType = {
  auth: authType;
  error: unknown;
  login: (credentials: credentialsType) => void;
};
