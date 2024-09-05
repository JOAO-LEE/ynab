import AddTransacion from "../../components/AddTransaction/AddTransacion"
import Transactions from "../../components/Transactions/Transactions"
import { useAuthContext } from "../../hooks/useAuthContext"
import styles from "./Home.module.css"

export default function Home() {
  const {state: { user }} = useAuthContext()
  return (
    <section className={styles["home-container"]}>
      <Transactions uid={user!.uid} />
      <AddTransacion uid={user!.uid} />
    </section>
  )
}
