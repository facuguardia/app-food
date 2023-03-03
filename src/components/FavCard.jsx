import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FavContext } from "../context/FavContext";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function FavCard({ item }) {
  // Contador del carrito
  const [cart, setCart] = useContext(CartContext);

  // Sumar al carrito
  const addToCart = () => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCart([...cart]);
    });
  };

/*
quantity: 1

*/

  // Restar del carrito
  const removeCard = () => {
     cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? item.quantity === 1 : (item.quantity -= 1);
      }
      setCart([...cart]);
    });
  };

  //  Contador individual del producto(va a servir para la pagina orden)
  const getQuantityById = (id) => {
    return cart.find((card) => card.id === id)?.quantity || 0;
  };

  const quantityPerCard = getQuantityById(item.id);

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
            return {...card, name: card.name, image: card.image, price: card.price, description: card.description}
          } else{
            return card
          }
        })
      } else {
        return [...currCard, {name, id, price, image, description}]
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

   

console.log(favs);
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

export default FavCard;
