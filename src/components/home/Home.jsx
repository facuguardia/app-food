import { Link } from "react-router-dom";
// Components
import Categorias from "./Categorias";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import Footer from "../Footer";
// Icon
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalOffer, MdOutlineFavoriteBorder } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { RiHome3Line } from "react-icons/ri";
import {BiChevronRight} from 'react-icons/bi'
// Plantilla card
import { food } from "../../data";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
// Auth
// import { useAuth } from "../../context/AuthContext";

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

  const [menu, setMenu] = useState(false);
// contador del carrito
  const [cart, setCart] = useContext(CartContext)
  const quantity = cart.reduce((acc,curr)=>{
     return acc + curr.quantity
  },0)

  return (
    <>
      {/* Container Sidebar */}
      <button onClick={() => setMenu(true)} className={`absolute top-[422px] items-center shadow-md pt-3 pb-3 pr-.5 pl-0 rounded-r-3xl text-white text-3xl font-bold bg-secondary `}><BiChevronRight/></button>
      <div
        className={`bg-secondary h-full fixed w-[20%] flex flex-col justify-between items-center p-5 pt-16 rounded-r-3xl z-50 transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Menu Sidebar */}
        <nav className="flex flex-col items-center gap-10 text-gray-300 text-4xl">
          {/* Item */}
          <Link href="/home">
            <RiHome3Line />
          </Link>
          {/* Item */}
          <Link href="#">
            <CgProfile />
          </Link>
          {/* Item */}
          <Link href="#">
            <BsCart3 /><span className="absolute pl-1 pr-1 pb-1 pt-1 rounded-full text-xl text-white font-semibold top-[200px] right-1">{quantity}</span>
          </Link>
          {/* Item */}
          <Link href="#">
            <MdOutlineLocalOffer />
          </Link>
          {/* Item */}
          <Link href="#">
            <MdOutlineFavoriteBorder />
          </Link>
        </nav>
        {/* Exit */}
        <div className="text-gray-300 text-4xl font-medium ">
          <Link to="/">
            <RxExit />
          </Link>
        </div>
        {/* Button Mobile */}
      </div>
        <Link href ="#" className="fixed right-3 bottom-4 text-3xl bg-black/20 p-3 rounded-full text-white z-50">
          <BsCart3 /><span className="absolute pl-1 pr-1 pb-1 pt-1 rounded-full text-xl text-white font-semibold bottom-9 right-1">{quantity}</span>
        </Link>
      {/* Container Home */}
      <div className="bg-gradient-to-b  from-background to-[#24282E] w-screen min-h-screen overflow-y-auto pt-4" onClick={() => setMenu(false)}>
        <Search />

        <Categorias />

        <Cards food={food} addToBuy={""} />

        <Footer />
      </div>
    </>
  );
}
export default Home;
