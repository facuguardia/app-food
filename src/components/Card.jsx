import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Card({ name, image, price, description, id }) {
  // Contador del carrito
  const [cart, setCart] = useContext(CartContext);

  // Sumar al carrito
  const addToCart = () => {
    setCart((currCard) => {
      const isCardFound = currCard.find((card) => card.id === id);
      if (isCardFound) {
        return currCard.map((card) => {
          if (card.id === id) {
            return { ...card, quantity: card.quantity + 1 };
          } else {
            return card;
          }
        });
      } else {
        return [...currCard, { id, quantity: 1, price }];
      }
    });
  };

  // Restar del carrito
  const removeCard = (id) => {
    setCart((currCard) => {
      if (currCard.find((card) => card.id === id)?.quantity === 1) {
        return currCard.filter((card) => card.id !== id);
      } else {
        return currCard.map((card) => {
          if (card.id === id) {
            return { ...card, quantity: card.quantity - 1 };
          } else {
            return card;
          }
        });
      }
    });
  };

  //  Contador individual del producto(va a servir para la pagina orden)
  const getQuantityById = (id) => {
    return cart.find((card) => card.id === id)?.quantity || 0;
  };

  const quantityPerCard = getQuantityById(id);

  return (
    // Contenedor de cada comida
    <div className=" bg-primary flex flex-col items-center gap-2 p-8 rounded-xl text-center text-gray-300 ">
      {/* Imagen de cada comida */}
      <img
        className="w-40 object-cover -mt-20 shadow-2xl "
        src={image}
        alt={name}
      />
      {/* Contador individual de cada comida */}
      {quantityPerCard > 0 && <div>{quantityPerCard}</div>}
      {/* Datos de cada comida */}
      <h1 className="text-lg font-medium text-white">{name}</h1>
      <h3 className="text-xl font-semibold text-secondary">{price}</h3>
      <p className="text-sm">{description}</p>

      {/* Boton para sumar o restar del carrito */}
      {quantityPerCard === 0 ? (
        <button onClick={() => addToCart()}>+</button>
      ) : (
        <button onClick={() => addToCart()}>+</button>
      )}
      {quantityPerCard > 0 && <button onClick={() => removeCard()}>-</button>}
    </div>
  );
}

export default Card;
