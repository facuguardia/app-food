import { Link } from "react-router-dom";
// Components
import Categorias from "./Categorias";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
// Icon
import { BsCartDash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineLocalOffer,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { RxExit } from "react-icons/rx";
// Plantilla card
import { food } from "../../data";
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
  return (
    <>
      {/* Container Sidebar */}
      <div className="flex flex-col justify-between items-center bg-secondary w-16 h-screen p-5 pt-16 rounded-r-2xl transition-all duration-300">
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
      </div>
      {/* Container Home */}
      <div
        className={`bg-gradient-to-b  from-background to-[#24282E]  min-h-screen overflow-y-auto`}
      >
        <Search />

        <Categorias />

        <Cards food={food} addToBuy={""} />
      </div>
    </>
  );
}
export default Home;
