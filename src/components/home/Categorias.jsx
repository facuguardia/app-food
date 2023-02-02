import React from "react";

function Categorias() {
  return (
    <div className="flex justify-between  overflow-x-auto ">
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        All{" "}
      </button>
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        Hamburguesas{" "}
      </button>
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        Pizzas{" "}
      </button>
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        Empanadas{" "}
      </button>
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        Milanesas{" "}
      </button>
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        Pastas{" "}
      </button>
      <button className="text-lg bg-[#1F1D28] text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-lato font-normal p-2 m-4">
        Ensaladas{" "}
      </button>
    </div>
  );
}

export default Categorias;
