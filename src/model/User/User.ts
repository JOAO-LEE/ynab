import { UserInfo } from "firebase/auth";
import { AuthReducerEnum } from "../../enum/AuthReducer.enum";

export type AuthUser = UserInfo | null;

export type AuthAction = { type: AuthReducerEnum, payload?: AuthUser }

export type UserReducer = {
  state: AuthUser
  dispatch: React.Dispatch<AuthAction>
};