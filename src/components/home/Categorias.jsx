import React from "react";

function Categorias() {
  return (
    <div className="flex justify-between overflow-scroll ">
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        All{" "}
      </button>
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        Hamburguesas{" "}
      </button>
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        Pizzas{" "}
      </button>
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        Empanadas{" "}
      </button>
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        Milanesas{" "}
      </button>
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        Pastas{" "}
      </button>
      <button className="text-xs font-sans bg-white hover:text-red-400 hover:border-b-2 hover:border-red-600 py-2 px-2 fond-lato p-2 m-4">
        Ensaladas{" "}
      </button>
    </div>
  );
}

export default Categorias;
