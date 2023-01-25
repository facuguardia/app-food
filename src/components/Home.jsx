import React from "react";
import {BsCartDash} from 'react-icons/bs';
import MenuInferior from "./MenuInferior";
import Categorias from "./Categorias";
import SideBar from "./SideBar";
// import Buscador 
// import Cards

// const [home, setHome] = React.useState({
//     Cards: [],
//     Categorias: [],
//     All: [],
// })


// const  handleCategorias = (event) => { 
//     const categoria = event.target.value;
//     setHome({
//         ...home,
//         Cards : home.allCards.filter(Cards => Cards.categoria === categoria)

//     })

// }
// const  handleAll = () =>{
//   setHome({
//     Cards : home.allCards
//   })
// }

function Home(){
   return (
    <div className="h-screen w-screen">
         <div className="flex justify-end">
        <SideBar />
        <br />
        <br />
        </div>
        <h1 className="ml-5 mt-5 font-bold text-left text-lg"> COMIDA DELICIOSA <br/> PARA VOS... </h1>
        
         <Categorias /> 
         <MenuInferior />
       
    </div>

   )
}
export default Home;