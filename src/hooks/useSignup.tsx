import { useState } from "react";
import { auth } from "../firebase-config";
import { SignUpFormFields } from "../model/Signup/SignUpFormFields";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { AuthReducerEnum } from "../enum/AuthReducer.enum";

export function useSignup() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState<boolean>(false);
  const {dispatch} = useAuthContext();
  
  const signup = async ({ displayName, email, password }: SignUpFormFields) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (!response) {
        throw new Error("Could not complete signup.");
      }
      
      await updateProfile(response.user, { displayName });
      dispatch({ type: AuthReducerEnum.LOGIN, payload: response.user })

      setIsPending(false);
      setError(null);

    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      }
      
    } finally {
      setIsPending(false);
    }
  }

  return { error, isPending, signup };
}

