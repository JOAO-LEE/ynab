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
      { 
        authIsReady 
        && 
          ( 
            <>
              <NavBar />
              <main className="p-2 min-h-full">
                <Routes>
                  <Route 
                  path="/" 
                  element={ user ? <Home /> : <Navigate  to="/login" /> } />
                  <Route 
                  path="/login" 
                  element={<Login />} />
                  <Route 
                  path="/signup" 
                  element={<SignUp />} />
                </Routes>
              </main>
            </>
          )
      }
    </>
  )
}

export default App
