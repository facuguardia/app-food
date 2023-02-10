import Home from './home/Home';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Home />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;