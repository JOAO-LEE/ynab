import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase-config";
import { AuthReducerEnum } from "../enum/AuthReducer.enum";

export function useLogout() {
  const [error, setError] = useState<unknown | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(auth);
      dispatch({ type: AuthReducerEnum.LOGOUT })
    } catch (error: unknown) {
      setError(error)
    } finally {
    setIsPending(false);
    }
  }

  return { error, isPending, logout };
}

