import { Lock, Mail, UserRound } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { SignUpFormFields } from "../../model/Signup/SignUpFormFields";

export default function SignUp() {
  const [signupFields, setSignupFields] = useState<SignUpFormFields>({ displayName: "", email: "", password: "" });
  const { signup, isPending, error } = useSignup();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signup(signupFields);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupFields((prev) => ({...prev, [e.target.id]: e.target.id === "password" ? e.target.value.replace(/\s/g, '') : e.target.value}));
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
            onChange={(e) => handleChange(e)} 
            value={signupFields.email} 
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
            onChange={(e) => handleChange(e)}
            value={signupFields.password} 
            type="password" 
            id="password" 
            className="outline-none w-full"
            />  
          </div>
        </label>
        <label htmlFor="displayName">
          <p>Name</p>
          <div className="flex items-center gap-1 bg-white p-2 rounded-lg">
            <UserRound />
            <input 
            onChange={(e) => handleChange(e)}
            value={signupFields.displayName} 
            type="text" 
            id="displayName" 
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
        {!!error && <span className="text-sm text-redish font-semibold">{error.replace("Firebase:", "")}</span>}
      </form>
    </section>
  )
}

