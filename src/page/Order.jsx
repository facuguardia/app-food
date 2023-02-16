import React, { useState } from "react";
// Plantilla card
import { food } from "../data";
// Componentes
import OrderItem from "../components/OrderItem";
import Sidebar from "../components/Sidebar";

const Order = () => {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);
  //manejador del estado de sidebar
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {/* Sidebar */}
      <Sidebar handleMenu={handleMenu} menu={menu} />
      {/* Contenedor de Orden */}
      <div
        className="grid grid-cols-1 w-full min-h-screen p-5"
        onClick={() => {
          if (menu) {
            handleMenu();
          }
        }}
      >
        {/* Titulo */}
        <h1 className="text-2xl font-bold text-center">Orden</h1>

        {/* Items */}
        {food.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}

        {/* Total a pagar */}
        <div className="w-full h-[90px] pb-8 flex justify-end items-center gap-4">
          <span className="text-2xl font-bold">Total a pagar</span>
          <span className="text-2xl font-bold">$ 100</span>
        </div>

        {/* Boton de pago */}
        <div className=" bg-secondary flex justify-center items-center rounded-full">
          <h1 className="text-2xl font-bold text-white">Pagar</h1>
        </div>
      </div>
    </>
  );
};

export default Order;
