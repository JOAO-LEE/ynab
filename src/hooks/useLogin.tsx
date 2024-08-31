import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase-config";
import { AuthReducerEnum } from "../enum/AuthReducer.enum";

export function useLogin() {
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }: { email: string, password: string }) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: AuthReducerEnum.LOGIN, payload: { user: response.user }});

      if (!isCancelled) {
      setIsPending(false);
      setError(null);
      }
      
    } catch (e: unknown) {
      if (e instanceof Error) {
        if (!isCancelled) {
          setError(e.message);
        }
      }
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, login };
}

