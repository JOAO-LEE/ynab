import { useReducer, useEffect, useState } from "react";
import { firestore } from "../firebase-config";
import { Document } from "../model/Document/Document";
import { ReducerAction } from "../model/common/ReducerAction";
import { query, collection as col } from "firebase/firestore";
import { DocumentReducerEnum } from "../enum/Document.enum";


const inicitalState: Document = {
  document: null,
  isPending: false,
  error: null,
  success: null
};

const firestoreReducer = (state: Document, action: ReducerAction<DocumentReducerEnum, Document>) => {
  const { type } = action;
  switch (type) {
    case DocumentReducerEnum.IS_PENDING:
    default:
      return state;
  }
}

export function useFirestore(collection: string) {
  const [response, dispatch] = useReducer(firestoreReducer, inicitalState);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);

  const ref = query(col(firestore, collection));

  const addDocument = (doc: unknown) => {
    dispatch({type: DocumentReducerEnum.IS_PENDING})
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
