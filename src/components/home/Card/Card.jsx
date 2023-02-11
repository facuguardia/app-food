import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function Card({
  name,
  image,
  price,
  stock,
  description,
  addToBuy,
  id,
}) {

  // import de context 
  const [cart,setCart] = useContext(CartContext)

// agregar al carrito
 const addToCart = () => {
   setCart((currCard)=>{
    const isCardFound = currCard.find((card)=> card.id === id)
    if(isCardFound){
      return currCard.map((card)=>{
        if(card.id ===id){
          return {...card,quantity :card.quantity +1}
        } else {
          return card
        }
      })
    } else {
      return [...currCard,{id,quantity:1 ,price}]
    }
  })
 }

// Restar del carrito
 const removeCard = (id) => {
  setCart((currCard)=>{
    if(currCard.find((card) => card.id ===id)?.quantity === 1){
      return currCard.filter((card)=>card.id !== id);
    }else {
      return currCard.map((card)=> {
        if(card.id ===id){
          return {...card, quantity: card.quantity -1}
        } else {
          return card; 
        }
      })
    }
  })
 }

//  contador individual del producto(va a servir para la pagina orden)
 const getQuantityById = (id) => {
  return cart.find((card)=>card.id === id) ?.quantity || 0;
 }

 const quantityPerCard = getQuantityById(id);
 
 



  return (

    <div className=" bg-primary flex flex-col items-center gap-2 p-8 rounded-xl text-center text-gray-300 ">
        
      <img
        className="w-40 object-cover -mt-20 shadow-2xl "
        src={image}
        alt={name}
      />
     {/* contador individual de cada comida */}
     {quantityPerCard > 0 && (<div>{quantityPerCard }</div>)} 


      <h1 className="text-lg font-medium text-white">{name}</h1>
      <h3 className="text-xl font-semibold text-secondary">{price}</h3>
      <p className="text-sm">{description}</p> 

     {/* Sumar o restar del carrito */}
    

      {quantityPerCard===0?(
    <button onClick={()=>addToCart()}>+</button>) : (
    <button onClick={()=>addToCart()}>+</button>)} 
     
    {quantityPerCard> 0 && <button onClick={()=> removeCard()}>-</button>}


 
    </div>

  );
}
