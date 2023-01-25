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
    <div>
        
        <div className="flex justify-end">
         <div className="flex-grow">
        <SideBar />
        </div>
        <button className="text-xl mt-4 mr-4 hover:text-red-400 hover:border-b-2  hover:border-red-500 "> <BsCartDash/> </button>
        </div>
        
         <h1 className="ml-5 mt-5 font-bold text-left text-lg"> COMIDA DELICIOSA <br/> PARA VOS... </h1>
        
         <Categorias /> 
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <MenuInferior />
       
    </div>

   )
}
export default Home;