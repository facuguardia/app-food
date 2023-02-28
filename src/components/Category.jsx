import { useState } from "react";

function Category({ food, setSearchTerm, setSearchResults }) {
  // Estado de la categoria
  const [category, setCategory] = useState("Todo");

  // Manejador del evento de categoria
  const handleClick = (e) => {
    const term = e.target.value;
    setSearchTerm("");
    setSearchTerm(term);
    if (term === "Todo") {
      setSearchResults(food);
    } else {
      const results = food.filter((item) =>
        item.category.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    }

    setCategory(term);
  };
  return (
    // Contenedor de categorias
    <div className="flex justify-between overflow-x-auto ">
      {/* Botones de categorias */}
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Todo"
      >
        Todo{" "}
      </button>
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Hamburguesas"
      >
        Hamburguesas{" "}
      </button>
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Pizzas"
      >
        Pizzas{" "}
      </button>
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Empanadas"
      >
        Empanadas{" "}
      </button>
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Milanesas"
      >
        Milanesas{" "}
      </button>
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Pastas"
      >
        Pastas{" "}
      </button>
      <button
        className="text-lg shadow-sm  text-white hover:text-[#ec7c6a] hover:border-b-2 hover:border-[#ec7c6a] py-1 px-1 font-normal p-2 m-4"
        onClick={handleClick}
        value="Ensaladas"
      >
        Ensaladas{" "}
      </button>
    </div>
  );
}

export default Category;
