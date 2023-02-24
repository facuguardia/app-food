import React from "react";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow">{children}</div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
