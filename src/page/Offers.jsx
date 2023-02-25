import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { CartContext } from "../context/CartContext";
// Cards
import { food } from "../data";
// Container
import OfferCards from "../container/OfferCards";
// Components
import Sidebar from "../components/Sidebar";
// Icons
import { BsCart3 } from "react-icons/bs";

const Offers = () => {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);

  // Estado del carrito
  const [cart, setCart] = useContext(CartContext);

  //Estado para guardar las ofertas
  const [offerCards, setOfferCards] = useState([]);

  //Filtra si isOffer=true cuando se inicializa el componente.
  useEffect(() => {
    const offerCards = food.filter((card) => card.isOffer);
    //Guarda las que tienen oferta en el estado.
    setOfferCards(offerCards);
  }, []);

  // Manejador del evento de sidebar
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Contador del carrito
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  //Render de las ofertas.
  return (
    <>
    <div className="">
      {/* Sidebar */}
      <div
        className="w-full h-screen overflow-x-hidden"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
      <Sidebar menu={menu} handleMenu={handleMenu} />

      {/* boton Carrito */}
      <Link
        to="/order"
        className="fixed right-3 bottom-12 text-3xl bg-black/50 p-3 rounded-full text-white z-50"
      >
        <BsCart3 />{" "}
        {quantity > 0 ? (
          <span className="absolute w-6 h-6 flex justify-center items-center bg-gray-400 rounded-full text-xl text-black font-semibold bottom-9 right-0.5">
            {quantity}
          </span>
        ) : null}
      </Link>
      {/* Sidebar */}
        {/* Se renderiza el componente Cards pero la propiedad food son solo las cards que tienen oferta */}
        <OfferCards food={offerCards} />
      </div>
    </div>
    </>
  );
};

export default Offers;
