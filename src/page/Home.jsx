import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Componentes
import Categorias from "../components/Categorias";
import Cards from "../container/Cards";
import Sidebar from "../components/Sidebar";
// Iconos
import { BsCart3 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
// Plantilla card
import { food } from "../data";
// Contexto
import { CartContext } from "../context/CartContext";

function Home() {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);
  // Estado del buscador
  const [searchTerm, setSearchTerm] = useState("");
  // Estado del filtro de cartas
  const [searchResults, setSearchResults] = useState([]);
  // Estado del carrito
  const [cart, setCart] = useContext(CartContext);

  // Manejador del evento de sidebar
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Manejador del evento del buscador
  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = food.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  // Contador del carrito
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      {/* Sidebar */}
      <Sidebar menu={menu} handleMenu={handleMenu} />
      {/* boton Carrito */}
      <Link
        to="/order"
        className="fixed lg:hidden right-3 bottom-16 text-3xl bg-black/50 p-3 rounded-full text-white z-50"
      >
        <BsCart3 />{" "}
        {quantity > 0 ? (
          <span className="absolute w-6 h-6 flex justify-center items-center bg-gray-400 rounded-full text-xl text-black font-semibold bottom-9 right-0.5">
            {quantity}
          </span>
        ) : null}
      </Link>
      {/* Contenedor de la pagina */}
      <div
        className="lg:absolute lg:left-[50px] h-screen overflow-x-hidden p-2 pb-10 lg:pt-10"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
        {/* Contenedor de la barra de busqueda */}
        <div className="w-full lg:w-52 relative lg:absolute top-0 right-3 lg:right-[60px] mt-2 ml-8">
          {/* Icono de busqueda*/}
          <BsSearch className="absolute left-4 top-8 -translate-y-1/2" />
          {/* Input de busqueda */}
          <input
            className="bg-primary w-[90%] lg:w-[250px] items-center rounded-2xl py-2 pl-12 pr-1 mt-3 shadow-md text-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <Categorias />
        </div>

        {/* Cards */}
        <div className="mt-10">
          <Cards food={searchTerm.length < 1 ? food : searchResults} />
        </div>
      </div>
    </>
  );
}
export default Home;
