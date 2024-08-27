import { useState } from "react";
import { auth } from "../firebase-config";
import { SignUpFormFields } from "../model/Signup/SignUpFormFields";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export function useSignup() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState<boolean>(false);
  
  const signup = async ({ displayName, email, password }: SignUpFormFields) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response.user);
      if (!response) {
        throw new Error("Could not complete signup.");
      }
      
      await updateProfile(response.user, { displayName });
      setIsPending(false);
      setError(null);

    } catch (e: unknown) {
      if (e instanceof FirebaseError || e instanceof Error) {
        setError(e.message);
      }
      setIsPending(false);
    }
  }

  return { error, isPending, signup };
}

