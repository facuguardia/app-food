import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FavContext } from "../context/FavContext";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

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
            
            // console.log(currCard);
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

/*
quantity: 1

*/

  // Restar del carrito
  const removeCard = () => {
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

  // Para tener un Fav
  const [favs, setFavs] = useContext(FavContext)

  // Alternar el true or false del estado
  const [isFav, setIsFav] = useState(false)

  const addFavorite = () =>{
    setFavs((currCard)=>{
      const isCardFounded = currCard?.find((card) => card.id === id)
      if (isCardFounded){
        return currCard?.map((card) =>{
          if(card.id === id){
            return {...card, name: card.name, image: card.image, price: card.price}
          } else{
            return card
          }
        })
      } else {
        return [...currCard, {name, id, price, image}]
      }
    })
  }

  const delFavorite = () =>{
    const delcard = favs.filter((item) => item.id !== id)
    setFavs(delcard)
  }

  const handleFavorite = () =>{
      if(isFav){
        setIsFav(false)
        delFavorite()
      }else{
        setIsFav(true)
        addFavorite()
      }
    }

  return (
    // Contenedor de cada comida
    <div className=" bg-primary flex flex-col h-72 items-center gap-2 p-8 rounded-xl text-center text-gray-300 ">
      {/* Imagen de cada comida */}
      <div className="flex gap-4 justify-end w-max h-16 " >
        <img
          className="w-48 object-cover -mt-20 "
          src={image}
          alt={name}
        />
        <div className=" relative ">
          {
            isFav ? (
                      <button onClick={handleFavorite} className='absolute left-4 bottom-14 '  >❤️</button>
                      ) : (
                      <button onClick={handleFavorite} className='absolute left-4 bottom-14 ' >🤍</button>
                    )
          }
        </div>
      </div>
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
      
      {/* { favs.map((item, index) => <Sidebar key={index} item={item} />) } */}
    </div>
  );
}

export default Card;
