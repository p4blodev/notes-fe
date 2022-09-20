import { authType } from "../models/auth.types";
import { credentialsType } from "../models/credentials.types";

export type UseAuthType = {
  auth: authType;
  error: unknown;
  login: (credentials: credentialsType) => void;
};
