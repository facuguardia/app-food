import React from "react";
import { Routes, Route } from "react-router-dom";

// Aca importamos los componentes
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import ProtectedRoute from "../components/login/ProtectedRoute";
import Register from "../components/login/Register";
import LandingPage from "../components/LandingPage";
// import Layout from "../components/Layout";

// Aca importamos el context
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <div className="bg-gradient-to-b  from-background to-[#24282E] h-screen w-screen text-gray-300 flex">
      <AuthProvider>
        {/* <Layout> */}
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
        {/* </Layout> */}
      </AuthProvider>
    </div>
  );
}

export default App;
