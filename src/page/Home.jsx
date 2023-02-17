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

  // function handleAddToCart(item) {
  //   setCart((prevCart) => {
  //     const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
  //     if (itemIndex >= 0) {
  //       // Si el item ya está en el carrito, actualiza la cantidad
  //       const updatedCart = [...prevCart];
  //       updatedCart[itemIndex].quantity += item.quantity;
  //       return updatedCart;
  //     } else {
  //       // Si el item no está en el carrito, añade el item con sus propiedades
  //       const updatedCart = [...prevCart, { ...item, image: item.image, name: item.name }];
  //       return updatedCart;
  //     }
  //   });
  // }

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
        className="fixed right-3 bottom-16 text-3xl bg-black/50 p-3 rounded-full text-white z-50"
      >
        <BsCart3 />{" "}
        {quantity > 0 ? (
          <span className="absolute w-6 h-6 flex justify-center items-center bg-gray-400 rounded-full text-xl text-black font-semibold bottom-9 right-0.5">
            {quantity}
          </span>
        ) : null}
      </Link>
      <div
        className="w-screen h-screen overflow-x-hidden p-2"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
        {/* Contenedor de la barra de busqueda */}
        <div className="w-full relative mt-2 ml-8">
          {/* Icono de busqueda*/}
          <BsSearch className="absolute left-4 top-8 -translate-y-1/2" />
          {/* Input de busqueda */}
          <input
            className="bg-primary w-[85%] items-center rounded-2xl py-2 pl-12 pr-1 mt-3 shadow-md text-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <Categorias />

        {/* Cards */}
        <Cards food={searchTerm.length < 1 ? food : searchResults} />
      </div>
    </>
  );
}
export default Home;
