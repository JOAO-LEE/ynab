import { createContext } from "react";
import { UserReducer } from "../../model/User/User";

export const AuthContext = createContext<UserReducer | null>(null);