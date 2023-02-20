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
import Offers from "../page/Offers";
import Payment from "../page/Payment";
import Profile from "../page/Profile";

// Aca importamos el layout
import Layout from "../container/Layout";

// Aca importamos el context
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

function App() {
  return (
    <div className="bg-img-background bg-center bg-cover text-gray-300">
      <CartProvider>
        <AuthProvider>
          <Layout>
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/order" element={<Order />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;
