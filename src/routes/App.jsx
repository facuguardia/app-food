import React from "react";
import { Routes, Route } from "react-router-dom";

// Aca importamos los componentes
import Home from "../page/Home";
import Login from "../page/Login";
import ProtectedRoute from "../ProtectedRoute";
import Register from "../page/Register";
import LandingPage from "../page/LandingPage";
import Order from "../page/Order";
import NotFound from "../page/NotFound";

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
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;
