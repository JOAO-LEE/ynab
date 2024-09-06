import { useReducer, useEffect, useState } from "react";
import { db } from "../firebase-config";
import { Document } from "../model/Document/Document";
import { ReducerAction } from "../model/common/ReducerAction";
import { collection as col, addDoc, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { DocumentReducerEnum } from "../enum/Document.enum";
import { Transaction } from "../model/Transaction/Transaction";
import { FirebaseError } from "firebase/app";


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
      return { document: null, success: false, isPending: true, error: null };
    case DocumentReducerEnum.ADDED_DOC:
      return { document: action.payload!.document!, error: null, success: true, isPending: false };
    case DocumentReducerEnum.ERROR:
      return { error: action.payload!.error, isPending: false, document: null, success: false };
    case DocumentReducerEnum.DELETED_DOC: 
      return { error: false, isPending: false, document: null, success: true };
    default:
      return state;
  }
}

export function useFirestore(collection: string) {
  const [response, dispatch] = useReducer(firestoreReducer, inicitalState);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  
  const dispatchIfNotCancelled = (action: ReducerAction<DocumentReducerEnum, Document>) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addDocument = async ({ amount, name, uid }: Transaction) => {
    dispatch({ type: DocumentReducerEnum.IS_PENDING });
    try {
      await addDoc(col(db, collection), { amount, name, uid, createdAt: serverTimestamp()});
      dispatchIfNotCancelled({ type: DocumentReducerEnum.ADDED_DOC });
    } catch (error) {
      if (error instanceof Error || error instanceof FirebaseError) {
        dispatchIfNotCancelled({ type: DocumentReducerEnum.ERROR, payload: { ...response, error: error.message } });
      }
    }
  };

  const deleteDocument = async (id: string) => {
    dispatch({ type: DocumentReducerEnum.IS_PENDING });
    try {
      const docRef = doc(db, collection, id);
      await deleteDoc(docRef);
      dispatchIfNotCancelled({ type: DocumentReducerEnum.DELETED_DOC });
      
    } catch (error) {
      if (error instanceof Error || error instanceof FirebaseError) {
        dispatchIfNotCancelled({ type: DocumentReducerEnum.ERROR, payload: {...response, error: error.message } });
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  });

  return (
    { addDocument, response, deleteDocument }
  )
}
