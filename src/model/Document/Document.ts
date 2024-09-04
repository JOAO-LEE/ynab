import { DocumentData } from "firebase/firestore";

export type Document = {
  document: null | DocumentData,
  isPending: boolean,
  error: boolean | null,
  success: boolean | null
}