import { useContext } from "react";
// Context
import { CartContext } from "../context/CartContext";

import {MdDelete} from 'react-icons/md'

function OfferCard({ name, image, price, description, id, discount, isOffer }) {
  // Contador del carrito
  const [cart, setCart] = useContext(CartContext);

  // Sumar al carrito
  const addToCart = () => {
    setCart((currCard) => {
      const isCardFound = currCard.find((card) => card.id === id);
      if (isCardFound) {
        return currCard.map((card) => {
          if (card.id === id) {
            return { ...card, quantity: card.quantity + 1, name: card.name, image: card.image, price: card.price };
          } else {
            return card;
          }
        });
      } else {
        return [...currCard, { id, quantity: 1, price, name, image }];
      }
    });
  };

  // Restar del carrito
  // const removeCard = () => {
  //   setCart((currCard) => {
  //     if (currCard.find((card) => card.id === id)?.quantity === 1) {
  //       return currCard.filter((card) => card.id !== id);
  //     } else {
  //       return currCard.map((card) => {
  //         if (card.id === id) {
  //           return { ...card, quantity: card.quantity - 1 };
  //         } else {
  //           return card;
  //         }
  //       });
  //     }
  //   });
  // };
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //  Contador individual del producto(va a servir para la pagina orden)
  const getQuantityById = (id) => {
    return cart.find((card) => card.id === id)?.quantity || 0;
  };

  const quantityPerCard = getQuantityById(id);

  // Calculador de descuento

  const getDiscountedPrice = (price, discount) => {
    const price1 = parseFloat(price);
    const discountedPrice = price1 - (price1 * discount) / 100;
    return "$ " + discountedPrice.toFixed(2);
  };

  const discountedPrice = getDiscountedPrice(price, discount);

  return (
    // Contenedor de cada comida
    <div className="bg-primary flex flex-col items-center gap-3 p-4 rounded-xl text-center text-gray-300">
      {/* Imagen de cada comida y precio en descuento */}
      <div className="w-full flex flex-grow justify-evenly gap-3">
        <img className="w-36 object-cover shadow-2xl " src={image} alt={name} />
        {/* Precio en descuento */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-200">-{discount}%</h3>
          <h3 className="text-3xl font-semibold text-secondary flex">
            {discountedPrice}
          </h3>
          <h3 className="text-xl font-semibold text-gray-500 line-through opacity-70">
            $ {price}
          </h3>
        </div>
      </div>
      {/* Contador individual de cada comida */}
      {/* {quantityPerCard > 0 && <div>{quantityPerCard}</div>} */}
      {/* Datos de cada comida */}
      <h1 className="text-lg font-medium text-white">{name}</h1>
      <p className="text-sm">{description}</p>

      {/* Boton para sumar o restar del carrito */}
      {quantityPerCard === 0 ? (
        <button onClick={() => addToCart()} className='bg-secondary text-gray-300 rounded-full p-2'>Añadir al Carrito</button>
      ) : (
        <button onClick={() => addToCart()} className='bg-secondary text-gray-300 rounded-full p-2'>Añadir al Carrito +</button>
      )}
      {/* {quantityPerCard > 0 && <button onClick={() => handleDelete(id)} className='text-gray-300 hover:text-red-400'><MdDelete/></button>} */}
    </div>
  );
}

export default OfferCard;
