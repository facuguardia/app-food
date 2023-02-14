import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Componentes
import Categorias from "../components/Categorias";
import Search from "../components/Search";
import Cards from "../container/Cards";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar'
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
  const handleMenu = () =>{
    setMenu (!menu)
  }
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

    <Categorias  />

    <Cards food={food} />

    <Footer />
  </div>
  <Sidebar handleMenu={handleMenu} menu={menu}/>
 </>
);
}
export default Home;

  // )
    // <>
      {/* Boton Sidebar */}
      {/* <button
        onClick={() => setMenu(true)}
        className={`absolute top-[422px] items-center shadow-md pt-3 pb-3 pr-.5 pl-0 rounded-r-3xl text-white text-3xl font-bold bg-secondary motion-safe:animate-pulse`}
      >
        <BiChevronRight />
      </button> */}
      {/* Contenedor Sidebar */}
      {/* <div
        className={`bg-secondary h-full fixed w-[20%] flex flex-col justify-between items-center p-5 pt-16 rounded-r-3xl z-50 transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      > */}
        {/* Menu Sidebar */}
        {/* <nav className="flex flex-col items-center gap-10 text-gray-300 text-4xl"> */}
          {/* Item */}
          {/* <Link to="/home">
            <RiHome3Line />
          </Link> */}
          {/* Item */}
          {/* <Link to="#">
            <CgProfile />
          </Link> */}
          {/* Item */}
          {/* <Link to="#">
            <MdOutlineLocalOffer />
          </Link> */}
          {/* Item */}
          {/* <Link to="#">
            <MdOutlineFavoriteBorder />
          </Link>
        </nav> */}
        {/* Exit */}
        {/* <div className="text-gray-300 text-4xl font-medium ">
          <Link to="/">
            <RxExit />
          </Link>
        </div> */}
        {/* Boton carrito */}
      {/* </div>
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
      </Link> */}
      {/* Contenedor Home */}
      //  <div
      //   className="bg-gradient-to-b  from-background to-[#24282E] w-screen min-h-screen overflow-x-hidden p-2"
      //   onClick={() => setMenu(false)}
      // > 
      //   <Search />

      //   <Categorias />

      //   <Cards food={food} />

      //   <Footer />
      // </div>
    // </>
//   );
// }
// export default Home;
