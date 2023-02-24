import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../context/CartContext";

function OrderItem({item}) {

  const [cart, setCart] = useContext(CartContext);


  const addToCart = (id) => {
cart.forEach(item=>{
  if(item.id===id){
    item.quantity += 1;
     }
     setCart([...cart])
   })
  }

  const removeCard = (id) => {
    cart.forEach(item => {
      if(item.id === id){
        item.quantity === 1 ? item.quantity === 1 : item.quantity -= 1 ;
      }
      setCart([...cart])
    })
  }

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between gap-4 items-center pl-2">
          <img src={item.image} className="w-10" />
          <span className="text-sm font-semibold">{item.name}</span>
          <div className="flex gap-2 rounded-full bg-primary py-1 px-4">
            <button className="text-sm font-semibold" onClick={()=>removeCard(item.id)}>-</button>
            <span className="text-sm font-semibold">{item.quantity}</span>
            <button className="text-sm font-semibold" onClick={()=>addToCart(item.id)}>+</button>
          </div>
          <span className="text-sm font-semibold">${item.price*item.quantity}</span>
          <button
            className="text-sm font-semibold"
            onClick={() => handleDelete(item.id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
