import { ReactNode, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducerEnum } from "../../enum/AuthReducer.enum";
import { AuthAction, AuthUser } from "../../model/User/User";

const authReducer = (state: AuthUser, action: AuthAction) => {
  const { type } = action; 
  
    switch (type) {
      case AuthReducerEnum.LOGIN:
        return action?.payload || null;
      case AuthReducerEnum.LOGOUT:
        return null;
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