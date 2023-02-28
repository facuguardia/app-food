import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../context/CartContext";

function OrderItem({ item }) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCart([...cart]);
    });
  };

  const removeCard = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? item.quantity === 1 : (item.quantity -= 1);
      }
      setCart([...cart]);
    });
  };

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <>
      <div className="grid grid-cols-5 items-center gap-2 ">
          <div className="items-center">
            <img src={item.image} className="w-10" />
          </div>
          <div className="">
            <span className="text-sm font-semibold text">{item.name}</span>
          </div>
          <div>
            <div className="flex gap-2 rounded-full bg-primary py-1 px-4">
              <button
                className="text-sm font-semibold"
                onClick={() => removeCard(item.id)}
              >
                -
              </button>
              <span className="text-sm font-semibold">{item.quantity}</span>
              <button
                className="text-sm font-semibold"
                onClick={() => addToCart(item.id)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">
              ${item.price * item.quantity}
            </span>
          </div>
          <div>
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
