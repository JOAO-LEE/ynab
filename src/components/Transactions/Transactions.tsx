import { Transaction } from "../../model/Transaction/Transaction";

function Transactions({ transactions }: { transactions: Transaction[] }) {
  
  return (
    <aside className="">
      <h4 className="text-3xl">Transactions</h4>
      <ul className="space-y-4 text-2xl">
        { 
          transactions.map((transaction) => (
            <li key={transaction.id!} className="flex justify-between border border-l-blue-500 border-l-4 h-24 items-center p-3 rounded-e-xl shadow-md hover:scale-105 hover:shadow-xl transition">
              <p>{transaction.name}</p>
              <p>${transaction.amount}</p>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Transactions