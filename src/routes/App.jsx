import React from "react";
import { Routes, Route } from "react-router-dom";

// Aca importamos los componentes
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import ProtectedRoute from "../components/login/ProtectedRoute";
import Register from "../components/login/Register";
import Landing from "../Components/Landing/Landing";

// Aca importamos el context
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <div  className="bg-background h-screen w-screen text-gray-300 flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
