import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

  function Search () {

    // const [ comidas, setComidas ] = useState([]);
    const [ search, setSearch ] = useState({
        valor: "",
    })

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch({
            valor: value,
        });
        /* aca invoco la funcion pasandole el estado buscador */
        
    }

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


    return(
        <div className="flex ju">
            {/* <label className="p-3 text-lg flex">Buscador:</label> */}
            <div className="mt-6 ml-5 text-2xl"><BsSearch/></div>
            <input className="rounded-full pi-2 px-2 p-2 m-4" value={search.valor} onChange={handleSearch} placeholder="  ¿Que estas buscando?"></input>
            {/* <h1>{search.valor}</h1> */}
        </div>
    )
 }

 export default Search