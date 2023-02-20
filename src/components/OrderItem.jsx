import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../context/CartContext";

function OrderItem({item}) {

  const [cart, setCart] = useContext(CartContext);


  const addToCart = (id) => {
    setCart((currCard) => {
      const isCardFound = currCard.find((item) => item.id === id);
      if (isCardFound) {
        return currCard.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, price: item.price, image : item.image, name: item.name };
          } else {
            return item;
          }
        });
      } else {
        return [...currCard, { id, quantity: 1, price: item.price, image : item.image, name: item.name }];
      }
    });
  };

  const removeCard = (id) => {
    setCart((currCard) => {
      if (currCard.find((item) => item.id === id)?.quantity === 1) {
        return currCard.filter((item) => item.id !== id);
      } else {
        return currCard.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
    // POSIBLES MANERAS DE SUMAR TODO(NO ME FUNCIONARON HASTA AHORA)

  // const sumarTodo = cart.reduce((acc, item)=> {
  //   return acc + item.quantity * item.price
  // },0)

  //  const newPrice=(item, id)=>{
  //   if(item.id === id){
  //    return item.quantity * item.price 
  //   }
  //  } 
 
  // const sumarTotal = () => {
  //   let total = ''
  //     cart.forEach((item) => {
  //    total = item.price * item.quantity;
  //     });
  //     return total;
  //   };
  

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
           {/* {item.quantity > 1 && <button className="text-sm font-semibold" onClick={()=>removeCard()}>-</button>} */}
            <span className="text-sm font-semibold">{item.quantity}</span>
            {/* <button className="text-sm font-semibold" onClick={()=>addToCart()}>+</button> */}
          </div>
          <span className="text-sm font-semibold">${item.price}</span>
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
