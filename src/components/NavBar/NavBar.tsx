import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="flex border-b-2 shadow-md items-center justify-between">
      <div className="text-center p-4">
        <h1 className="text-6xl">YNAB</h1>
        <h2>(you need a budget)</h2>
      </div>
      <nav>
        <ul className="flex p-4 gap-4">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>

        </ul>
      </nav>
    </header>
  )
}