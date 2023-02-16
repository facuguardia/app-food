import React from 'react';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;