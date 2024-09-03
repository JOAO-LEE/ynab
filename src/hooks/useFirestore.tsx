import { useReducer, useEffect, useState } from "react";
import { firestore } from "../firebase-config";
import { Document, DocumentAction } from "../model/Document/Document";
import { query, collection as col } from "firebase/firestore";


const inicitalState: Document = {
  document: null,
  isPending: false,
  error: null,
  success: null
};

const firestoreReducer = (state: Document, action: DocumentAction<string, Document>) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}

export function useFirestore(collection: string) {
  const [response, dispatch] = useReducer(firestoreReducer, inicitalState);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);

  const ref = query(col(firestore, collection));

  const addDocument = (doc: unknown) => {

  };

  const deleteDocument = (id: string) => {

  };

  useEffect(() => {
    return () => setIsCancelled(true);
  });

  return (
    { addDocument, deleteDocument, response }
  )
}
