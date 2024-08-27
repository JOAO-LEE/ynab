import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="flex border-b-2 shadow-md items-center justify-between">
      <div className="text-center p-4">
        <h1 className="text-6xl"><span className="text-redish">YN</span><span className="text-bluesy">AB</span></h1>
        <h2 className="text-lg">(<span className="text-redish font-semibold">y</span>ou <span className="text-redish font-semibold">n</span>eed <span className="text-bluesy font-semibold">a b</span>udget)</h2>
      </div>
      <div className="flex items-center p-4 gap-4">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <Moon />
      </div>
    </header>
  )
}