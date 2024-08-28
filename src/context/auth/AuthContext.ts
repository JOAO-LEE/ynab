import { User } from "firebase/auth";
import { createContext } from "react";
import { UserReducer } from "../../model/Auth/UserReducer";

export const AuthContext = createContext<UserReducer | null>(null);