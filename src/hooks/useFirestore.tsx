import { useReducer, useEffect, useState } from "react";
import { db } from "../firebase-config";
import { Document } from "../model/Document/Document";
import { ReducerAction } from "../model/common/ReducerAction";
import { collection as col, addDoc } from "firebase/firestore";
import { DocumentReducerEnum } from "../enum/Document.enum";
import { Transaction } from "../model/Transaction/Transaction";


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
      return {...state, isPending: true };
    case DocumentReducerEnum.ADDED_DOC:
      return { isPending: false, document: action.payload!, success: true, error: null };
    default:
      return state;
  }
}

export function useFirestore(collection: string) {
  const [response, dispatch] = useReducer(firestoreReducer, inicitalState);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  
  const dispatchIfNotCancelled = (action: ReducerAction<DocumentReducerEnum, Document>) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addDocument = async (doc: Transaction) => {
    dispatch({ type: DocumentReducerEnum.IS_PENDING });
    try {
      const addedDocRef = await addDoc(col(db, collection), doc);
      const addedDoc: Document = {
        document: {id: addedDocRef.id, doc},
        isPending: false, 
        success: true,
        error: null
      }
      dispatchIfNotCancelled({ type: DocumentReducerEnum.ADDED_DOC, payload: addedDoc });
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteDocument = async (id: string) => {

  // };

  useEffect(() => {
    return () => setIsCancelled(true);
  });

  return (
    { addDocument, response }
  )
}
