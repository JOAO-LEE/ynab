import AddTransacion from "../../components/AddTransaction/AddTransacion"
import Transactions from "../../components/Transactions/Transactions"
import styles from "./Home.module.css"

export default function Home() {
  return (
    <section className={styles["home-container"]}>
      <Transactions />
      <AddTransacion />
    </section>
  )
}
