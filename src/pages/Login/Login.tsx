import { Lock, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <section className="form-section mt-4">
      <p className="text-3xl text-center">Login</p>
      <form 
      onSubmit={handleSubmit}
      className="p-4 text-lg flex flex-col gap-4">
      <label htmlFor="email">
        <p>Email</p>
        <div className="flex items-center gap-1 bg-white p-2 rounded-lg">
          <Mail />
          <input
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          type="email" 
          id="email" 
          className="outline-none w-full"
          />  
        </div>
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <div className="flex items-center gap-1 bg-white p-2 rounded-lg">
          <Lock />
          <input 
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          type="password" 
          id="password" 
          className="outline-none w-full"
          />  
        </div>
      </label>
        <button 
        type="submit"
        className="border border-bluesy p-2 rounded-lg hover:bg-bluesy hover:text-off-white transition duration-200 w-1/3"
        >
          Login
        </button>
      </form>
    </section>
  )
}

