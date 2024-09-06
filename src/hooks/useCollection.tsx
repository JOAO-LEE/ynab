import { useEffect,  useState } from "react";
import { Transaction } from "../model/Transaction/Transaction";
import { onSnapshot, query, collection, orderBy, where, QueryConstraint } from "firebase/firestore";
import { db } from "../firebase-config";
import { QueryTuple } from "../model/common/Firebase/Firebase";

const WHERE_TUPLE_SIZE = 3;

export function useCollection(collectionSearch: string, q?: QueryTuple) {
  const [docs, setDocs] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const collectionRef = collection(db, collectionSearch);
    const queryConstraints: QueryConstraint[] = [];

    if (q?.length === WHERE_TUPLE_SIZE) {
      queryConstraints.push(where(...q));
    }

    queryConstraints.push(orderBy("createdAt", "desc"));
    const qRef = query(collectionRef, ...queryConstraints);
    const unsubscribe = onSnapshot(qRef,
    (snapshot) => {
      const allDocs = snapshot.docs.map((doc) => {

        return {
          ...doc.data(),
         id: doc.id
        } as Transaction;
      });
      setDocs(allDocs);
    }, (error) => {
      setError(error.message);
    });

    return () => unsubscribe();

  }, [collectionSearch, q]);

  return { docs, error }
}
