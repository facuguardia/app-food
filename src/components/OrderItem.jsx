import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../context/CartContext";

function OrderItem({item}) {

  const [cart, setCart] = useContext(CartContext);

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
            <button className="text-sm font-semibold">-</button>
            <span className="text-sm font-semibold">{item.quantity}</span>
            <button className="text-sm font-semibold">+</button>
          </div>
          <span className="text-sm font-semibold">{item.price}</span>
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
