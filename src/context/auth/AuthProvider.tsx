import { ReactNode, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducerEnum } from "../../enum/AuthReducer.enum";
import { AuthUser } from "../../model/User/User";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { ReducerAction } from "../../model/common/ReducerAction";


const authReducer = (state: AuthUser, action: ReducerAction<AuthReducerEnum, AuthUser>) => {
  const { type } = action; 
    switch (type) {
      case AuthReducerEnum.LOGIN:
        return {...state, user: action.payload!.user };
      case AuthReducerEnum.LOGOUT:
        return {...state, user: null, authIsReady: false};
      case AuthReducerEnum.AUTH_IS_READY:
        return {...state, user: action.payload!.user, authIsReady: true }
      default:
        return state;
    }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, { user: null, authIsReady: false });
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: AuthReducerEnum.AUTH_IS_READY, payload: { user } });
    });

    return () => unsubscribe();

  }, []);

  console.log("auth-context test:", {state: state.user});

  return (
    <AuthContext.Provider 
    value={{ state , dispatch }}
    >
      {children}
    </AuthContext.Provider>
  )
}