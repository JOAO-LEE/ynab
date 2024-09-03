import { CircleDollarSign, Pencil } from "lucide-react";
import { Transaction } from "../../model/Transaction/Transaction";
import { useState } from "react";

export default function AddTransacion() {
  const [transaction, setTransaction] = useState<Transaction>({ name: "", amount: "" });
  return (
    <div className="border-spacing-3 rounded-xl p-4 shadow-xl">
      <h3 className="text-3xl">Add a transaction</h3>
      <form className="p-4 text-lg flex flex-col gap-4">
        <label htmlFor="name">
          <p>Name</p>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <Pencil />
            <input
            value={transaction?.name}
            onChange={(e) => setTransaction(prev => ({...prev, name: e.target.value}))} 
            type="text" 
            name="name" 
            id="name" 
            className="outline-none w-full"
            />
          </div>
        </label>
        <label htmlFor="amount">
          <p>Amount</p>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <CircleDollarSign />
            <input
            value={transaction?.amount}
            onChange={(e) => setTransaction(prev => ({...prev, amount: e.target.value}))} 
            type="text" 
            name="amount" 
            id="amount" 
            className="outline-none w-full"
            />
          </div>
        </label>
      </form>
    </div>
  )
}
