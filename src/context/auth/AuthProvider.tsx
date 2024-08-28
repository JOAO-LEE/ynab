import { ReactNode, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { UserInfo } from "firebase/auth";
import { AuthReducerEnum } from "../../enum/AuthReducer.enum";
import { AuthUser } from "../../model/User/User";

const authReducer = (state: AuthUser, action: {type: AuthReducerEnum, payload: UserInfo}) => {
  const {type, payload} = action; 
    switch (type) {
      case AuthReducerEnum.LOGIN:
        return payload;
      case AuthReducerEnum.LOGOUT:
        return null
      default:
        return state;
    }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, null); 
  return (
    <AuthContext.Provider 
    value={{ state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  )
}

 