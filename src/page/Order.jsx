import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { CartContext } from "../context/CartContext";
// Components
import OrderItem from "../components/OrderItem";
import Sidebar from "../components/Sidebar";

const Order = () => {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);
  // Funcion para abrir y cerrar el sidebar
  const handleMenu = () => {
    setMenu(!menu);
  };

  const [cart, setCart] = useContext(CartContext);

  const sumarTodo = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <>
      {/* Sidebar */}
      <Sidebar handleMenu={handleMenu} menu={menu} />
      {/* Contenedor de la orden */}
      <div
        className="grid grid-cols-1 w-full h-screen p-5"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
        <div className="flex flex-col justify-between pb-12">
          {/* Titulo de la orden */}
          <h1 className="text-2xl text-gray-300 font-bold text-center">
            Tú pedido
          </h1>
          {/* Items*/}
          <div className="absolute top-24">
            <div className="container mx-auto mt-5 text-center">
              {cart.length === 0 ? (
                <p className="text-xl text-gray-300">No hay artículos en el carrito...</p>
              ) : (
                cart.map((item, index) => <OrderItem key={index} item={item} />)
              )}
            </div>
          </div>
          {/* Total a pagar */}
          <div className="flex justify-end items-center gap-4">
            <span className="text-2xl font-bold">Total a pagar</span>
            <span className="text-2xl font-bold"> ${sumarTodo}</span>
          </div>
          {/* Boton pagar */}
          <div className=" bg-secondary flex justify-center items-center rounded-full py-2 px-4">
            <Link to="/profile">
              <button className="text-2xl font-bold text-white">Pagar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
