import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export const firestoreConverter = {
  fromFirestore: <T>(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T => {
    return snapshot.data(options) as T; 
  }
}