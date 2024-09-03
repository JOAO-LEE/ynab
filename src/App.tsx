import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { state: { authIsReady, user } } = useAuthContext();
  return (
    <>
      <NavBar />
      <main className="p-2 min-h-full">
      { 
        authIsReady 
        && 
          ( 
            <>
              <Routes>
                <Route 
                path="/" 
                element={ user ? <Home /> : <Navigate  to="/login" /> } />
                <Route 
                path="/login" 
                element={ !user ? <Login /> : <Navigate to="/"/> } />
                <Route 
                path="/signup" 
                element={ !user ? <SignUp /> : <Navigate to="/"/> } />
              </Routes>
            </>
          )
        }
        </main>
    </>
  )
}

export default App
