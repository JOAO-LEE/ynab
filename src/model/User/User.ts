import { User } from "firebase/auth";
import { AuthReducerEnum } from "../../enum/AuthReducer.enum";
import { ReducerAction } from "../common/ReducerAction";

export type AuthUser = {
  user: User | null;
  authIsReady?: boolean;
}

export type UserReducer = {
  state: AuthUser
  dispatch: React.Dispatch<ReducerAction<AuthReducerEnum, AuthUser>>
};