import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Componentes
import Categorias from "../components/Categorias";
import Search from "../components/Search";
import Cards from "../container/Cards";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// Iconos
import { BsCart3 } from "react-icons/bs";
// Plantilla card
import { food } from "../data";
// Contexto
import { CartContext } from "../context/CartContext";

// const [home, setHome] = useState({
//     Cards: [],
//     Categorias: [],
//     All: [],
// })

// const  handleCategorias = (event) => {
//     const category = event.target.value;
//     setHome({
//         ...home,
//         Cards : home.allCard.filter(Card => Card.category === category)

//     })

// }
// const  handleAll = () =>{
//   setHome({
//     Cards : home.allCards
//   })
// }

function Home() {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);
  //manejador del estado de sidebar
  const handleMenu = () => {
    setMenu(!menu);
  };
  // Contador del carrito
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      {/* boton Carrito */}
      <Link
        to="/order"
        className="fixed right-3 bottom-4 text-3xl bg-black/20 p-3 rounded-full text-white z-50"
      >
        <BsCart3 />{" "}
        {quantity > 0 ? (
          <span className="absolute w-6 h-6 flex justify-center items-center bg-gray-400 rounded-full text-xl text-black font-semibold bottom-9 right-0.5">
            {quantity}
          </span>
        ) : null}
      </Link>
      <div
        className="bg-gradient-to-b  from-background to-[#24282E] w-screen min-h-screen overflow-x-hidden p-2"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
        <Search />

        <Categorias />

        <Cards food={food} />

        <Footer />
      </div>
      <Sidebar handleMenu={handleMenu} menu={menu} />
    </>
  );
}
export default Home;
