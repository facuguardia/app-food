import React from "react";
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
    <div className="bg-[#24282E] h-screen w-screen"> 
        <SideBar />
        <br />
        <br />
        <h1 className="ml-5 mt-5 font-bold text-center text-lg text-[#E58326]"> COMIDA DELICIOSA <br/> PARA VOS... </h1>
         <Categorias /> 
         <MenuInferior />
    </div>
   )
}
export default Home;