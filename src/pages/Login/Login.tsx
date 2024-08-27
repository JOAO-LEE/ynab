import { Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <section className="bg-off-white p-8 mx-auto w-full md:w-1/2 rounded shadow-md flex flex-col justify-center">
      <p className="text-3xl text-center">Login</p>
      <form 
      action="" 
      className="p-8 text-lg">
      <label htmlFor="email">Email</label>
        <div className="flex gap-1 bg-white p-2 rounded-lg">
          <Mail />
          <input type="email" id="email" className="outline-none w-full"/>  
        </div>
        <label htmlFor="password">Password</label>
        <div className="flex gap-1 bg-white p-2 rounded-lg ">
          <Lock />
          <input type="password" id="password" className="outline-none w-full"/>  
        </div>
      </form>
    </section>
  )
}

