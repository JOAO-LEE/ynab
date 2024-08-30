import { Loader, Lock, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import "./Login.css";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({email, password});
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
        disabled={isPending}
        className="border border-bluesy p-2 rounded-lg bg-bluesy text-off-white transition duration-200 w-1/3 hover:opacity-80 disabled:opacity-80 h-12"
        >
          { 
            !isPending 
            ? 
              "Login" 
            : 
              <Loader className="animate-spin text-center mx-auto" />
          }
        </button>
        {
          !!error 
          && 
            (
              <span className="text-sm text-redish font-semibold">{error.replace("Firebase:", "")}</span>
            )
        }
      </form>
    </section>
  )
}

