import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  // const [ comidas, setComidas ] = useState([]);
  const [search, setSearch] = useState({
    valor: "",
  });

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch({
      valor: value,
    });
    /* aca invoco la funcion pasandole el estado buscador */
  };

  // const peticionGet=async()=>{
  //     await axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then(response=>{
  //       setUsuarios(response.data);
  //       setTablaUsuarios(response.data);
  //     }).catch(error=>{
  //       console.log(error);
  //     })
  //   }

  /* primero un estado con false o true
tendria un funcion que compara el value del imput con la categoria (con el icludes)
"" no renderiza la card , si cambia si lo renderiza */

  // const filtrar=(terminoBusqueda)=>{
  //     var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
  //       if( elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  //         || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  //       ) {
  //         return elemento;
  //         }
  //     });
  //     setUsuarios(resultadosBusqueda);
  //   }

  return (
    <div className="w-full relative mt-2 ml-8">
      <button className="absolute left-4 top-8 -translate-y-1/2">
        <BsSearch />
      </button>
      <input
        className="bg-primary w-[85%] items-center rounded-2xl py-2 pl-10 pr-1 mt-3 shadow-md text-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        value={search.valor}
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default Search;
