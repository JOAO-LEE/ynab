import { ReactNode, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { User } from 'firebase/auth';
import { AuthReducerEnum } from '../../enum/AuthReducer.enum';

export const authReducer = (state: User, action: AuthReducerEnum) => {
    switch (action) {
      case AuthReducerEnum.LOGIN:
        break;
      case AuthReducerEnum.SIGNUP:
        break;
      case AuthReducerEnum.LOGOUT:
        break;
      default:
        return state;
        break;
    }
}


function AuthProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(authReducer, );


  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider