import { Transaction } from "../Transaction/Transaction";

export type Document = {
  document: null | Transaction,
  isPending: boolean,
  error: boolean | null | string,
  success: boolean | null
}