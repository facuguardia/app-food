import React from "react";
import { Routes, Route } from "react-router-dom";

// Aca importamos los componentes
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import ProtectedRoute from "../components/login/ProtectedRoute";
import Register from "../components/login/Register";
import LandingPage from "../components/LandingPage";

// Aca importamos el context
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

function App() {
  return (
    <div className="bg-img-background bg-center bg-cover h-screen w-full text-gray-300 flex">
    <CartProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </CartProvider>
    </div>
  );
}

export default App;
