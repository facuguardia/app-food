import React from 'react'
import { food } from '../data';
import { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../container/Cards';
import { BsCart3 } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import Sidebar from '../components/Sidebar';
import { MdOutlineLocalOffer } from 'react-icons/md';

const Offers = () => {

    // Estado del sidebar
    const [menu, setMenu] = useState(false);

    // Estado del carrito
    const [cart, setCart] = useContext(CartContext);

    //Estado para guardar las ofertas
    const [offerCards, setOfferCards] = useState([]);

    //Filtra si isOffer=true cuando se inicializa el componente.
    useEffect(() => {
        const offerCards = food.filter(card => card.isOffer);
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
        
        <div>

        {/* Sidebar */}
        <Sidebar menu={menu} handleMenu={handleMenu} />

        {/* boton Carrito */}
        <Link
        to="/order"
        className="fixed right-3 bottom-16 text-3xl bg-black/50 p-3 rounded-full text-white z-50">
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
        <h1 className='text-center font-bold flex align-middle justify-center underline underline-offset-8'>OFERTAS <MdOutlineLocalOffer /></h1>

        {/* Se renderiza el componente Cards pero la propiedad food son solo las cards que tienen oferta */}
        <Cards food={offerCards} />
        </div>
        </div>
      );
}

export default Offers