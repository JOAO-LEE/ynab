import { useMemo } from "react"
import AddTransacion from "../../components/AddTransaction/AddTransacion"
import Transactions from "../../components/Transactions/Transactions"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"
import styles from "./Home.module.css"
import { QueryTuple } from "../../model/common/Firebase/Firebase"

export default function Home() {
  const {state: { user }} = useAuthContext()
  const query = useMemo<QueryTuple>(() => ["uid", "==", user!.uid], [user]);
  const { docs, error } = useCollection("transactions", query);
  
  return (
    <section className={styles["home-container"]}>
      {!!docs.length && <Transactions transactions={docs} /> }
      { error && <p>{error}</p> }
      <AddTransacion uid={user!.uid} />
    </section>
  )
}
