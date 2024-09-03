import { DocumentData } from "firebase/firestore";

export type DocumentAction<T, M> = { type: T, payload?: M };

export type Document = {
  document: null | DocumentData,
  isPending: boolean,
  error: boolean | null,
  success: boolean | null
}