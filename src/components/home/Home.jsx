import React, {useState} from "react";
import { Link } from "react-router-dom";
// Components
import Categorias from "./Categorias";
import Search from "./Search/Search";
//icon
import { BsCartDash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalOffer, MdOutlineFavoriteBorder, MdExitToApp } from "react-icons/md";
 // Auth
// import { useAuth } from "../../context/AuthContext";

//  plantilla card
import { food } from "../../data";
import Cards from "./Cards/Cards";






// const [home, setHome] = React.useState({
//     Cards: [],
//     Categorias: [],
//     All: [],
// })

// const  handleCategorias = (event) => {
//     const category = event.target.value;
//     setHome({
//         ...home,
//         Cards : home.allCards.filter(Cards => Cards.category === category)

//     })

// }
// const  handleAll = () =>{
//   setHome({
//     Cards : home.allCards
//   })
// }

// function Home() {
 
//   return (
//     <div className=" bg-gradient-to-b  from-background to-[#24282E] min-h-screen w-full overflow-y-auto">
      
//       {/* <Sidebar /> */}
//       <Search />
//       <Categorias />
//       <Cards food={food} addToBuy={''}/>

//     </div>
//   );
// }


function Home() {


  
   return(
  <>
    <div className="flex">
       <div className=" rounded-r-2xl w-16 transition-all duration-300 h-screen bg-secondary relative p-5 pt-8">
         
                 <nav className="flex flex-col gap-8 ">
                    <Link
                href="#"
                className="flex items-center gap-4 "
              >
                <CgProfile className={`text-white text-4xl`} />
              
              </Link>
              <Link
                href="#"
                className=" flex items-center gap-4 "
              >
                <BsCartDash className="text-4xl text-white"/> 

              </Link>
              <Link
                href="#"
                className=" flex items-center gap-4 "
              >
                <MdOutlineLocalOffer className="text-white text-4xl" /> 
            
              </Link>
              <Link
                href="#"
                className=" flex items-center gap-4 "
              >
                <MdOutlineFavoriteBorder className="text-white text-4xl" />
              
              </Link>
            </nav>
            <div className="mt-[490px]">
              <Link
                to="/"
                className="flex items-center gap-4 "
              >
                <MdExitToApp className="text-white font-bold text-4xl" />

              </Link>
           </div>
      </div>
    </div>
          <div className={`bg-gradient-to-b  from-background to-[#24282E]  min-h-screen overflow-y-auto`}>
            <Search />
            <Categorias />
            <Cards food={food} addToBuy={''}/>

          </div>
  </>
     )
     
    }
    export default Home;