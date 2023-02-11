import { Link } from "react-router-dom";
// Components
import Categorias from "./Categorias";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import Footer from "../Footer";
// Icon
import { BsCartDash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalOffer, MdOutlineFavoriteBorder } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
// Plantilla card
import { food } from "../../data";
import { useState } from "react";
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
  return (
    <>
      {/* Container Sidebar */}
      <div
        className={`bg-secondary h-full fixed w-[20%] flex flex-col justify-between items-center p-5 pt-16 rounded-tr-3xl z-50 transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Menu Sidebar */}
        <nav className="flex flex-col items-center gap-10 text-gray-300 text-4xl">
          {/* Item */}
          <Link href="#">
            <CgProfile />
          </Link>
          {/* Item */}
          <Link href="#">
            <BsCartDash />
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
        <button
          onClick={() => setMenu(!menu)}
          className="fixed right-4 bottom-4 text-xl bg-black/30 p-2.5 rounded-full text-white z-50"
        >
          {menu ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>
      </div>
      {/* Container Home */}
      <div
        className={`bg-gradient-to-b  from-background to-[#24282E]  min-h-screen overflow-y-auto`}
      >
        <Search />

        <Categorias />

        <Cards food={food} addToBuy={""} />

        <Footer />
      </div>
    </>
  );
}
export default Home;
