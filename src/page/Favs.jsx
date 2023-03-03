import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { FavContext } from "../context/FavContext";
import { CartContext } from "../context/CartContext";

// Cards
import { food } from "../data";

// Container
import FavCard from "../components/FavCard";
import OfferCards from "../container/OfferCards";

// Components
import Sidebar from "../components/Sidebar";

// Icons
import { BsCart3 } from "react-icons/bs";

const Favs = () => {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);

  // Estado del carrito
  const [cart, setCart] = useContext(CartContext)
  const [favs, setFavs] = useContext(FavContext);

  //Estado para guardar las ofertas
  const [cardFav, setCardFav] = useState([]);

  //Filtra si isOffer=true cuando se inicializa el componente.
  useEffect(() => {
    const favCards = favs.map((card) => card);
    //Guarda las que tienen oferta en el estado.
    setCardFav(favCards);
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
      {/* Sidebar */}
      <Sidebar menu={menu} handleMenu={handleMenu} />
      {/* Contenedor de los favs */}
      <div
        className="w-full h-screen overflow-x-hidden"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
        <div className="flex flex-col justify-between pb-12">
         {/* Titulo de la orden */}
         <h1 className="text-2xl text-gray-300 font-bold text-center">
            Tus Favoritos
          </h1>
            <div className="container mx-auto mt-5 text-center">
              {favs.length === 0 ? (
                <p className="text-xl text-gray-300">No hay favoritos. Intenta agregando algunos</p>
              ) : (
                <OfferCards food={favs} />
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favs;
