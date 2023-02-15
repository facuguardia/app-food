import React from "react";
import { MdDelete } from "react-icons/md";
import cheddarybacon from "../assets/burger-barbacoa.png";

function OrderItem({ item }) {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between gap-4 items-center pl-2">
          <img src={cheddarybacon} className="w-10" />
          <span className="text-sm font-semibold">Milanesa de Carne</span>
          <div className="flex gap-2 rounded-full bg-primary py-1 px-4">
            <button className="text-sm font-semibold">-</button>
            <span className="text-sm font-semibold">1</span>
            <button className="text-sm font-semibold">+</button>
          </div>
            <span className="text-sm font-semibold">$ 99</span>
          <button className="text-sm font-semibold">
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
