import { CircleDollarSign, Pencil, Plus } from "lucide-react";
import { Transaction } from "../../model/Transaction/Transaction";
import { FormEvent, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function AddTransacion() {
  const [transaction, setTransaction] = useState<Transaction>({ name: "", amount: "" });
  const { addDocument } = useFirestore("transactions");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addDocument(transaction);
  };

  return (
    <div>
      <h3 className="text-3xl">Add a transaction</h3>
      <form onSubmit={handleSubmit} className="p-4 text-lg flex flex-col gap-4 border rounded-xl shadow-xl">
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
            required
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
            required
            />
          </div>
        </label>
        <button className="text-base border border-bluesy p-2 rounded-lg text-bluesy flex justify-center gap-1">
          <p>Add</p>
          <Plus className="size-5 " />
        </button>
      </form>
    </div>
  )
}
