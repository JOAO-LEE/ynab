import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase-config";
import { AuthReducerEnum } from "../enum/AuthReducer.enum";

export function useLogout() {
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(auth);
      dispatch({ type: AuthReducerEnum.LOGOUT });

      if (!isCancelled) {
      setIsPending(false);
      setError(null);
      }
      
    } catch (error: unknown) {
      setError(error);
    } finally {
    setIsPending(false);
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, logout };
}

