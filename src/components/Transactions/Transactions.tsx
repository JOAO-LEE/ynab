import { Trash } from "lucide-react";
import { Transaction } from "../../model/Transaction/Transaction";
import { useFirestore } from "../../hooks/useFirestore";

function Transactions({ transactions }: { transactions: Transaction[] }) {
  const {deleteDocument} = useFirestore("transactions");
  
  return (
    <aside className="">
      <h4 className="text-3xl">Transactions</h4>
      <ul className="space-y-4 text-2xl">
        { 
          transactions.map((transaction) => (
            <li key={transaction.id!} className="flex justify-between border border-l-blue-500 border-l-4 h-24 items-center p-3 rounded-e-xl shadow-md hover:scale-105 hover:shadow-xl transition group">
              <p>{transaction.name}</p>
              <div className="flex gap-1 items-center p-1">
                <p>${transaction.amount}</p>
                <Trash
                className="group-hover:opacity-100 opacity-0 transition-all duration-500 delay-75 cursor-pointer hover:text-redish"
                onClick={() => deleteDocument(transaction.id!)} 
                />
              </div>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Transactions