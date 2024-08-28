import { UserInfo } from "firebase/auth"
import { AuthReducerEnum } from "../../enum/AuthReducer.enum"

export type AuthUser = UserInfo | null;

export type UserReducer = {
  state: AuthUser
  dispatch: React.Dispatch<{ type: AuthReducerEnum, payload: UserInfo}>
}