import React from "react";
// Components
import Categorias from "./Categorias";
import Sidebar from "./Sidebar";
import Search from "./Search/Search";
import {BsCartDash} from "react-icons/bs"
 // Auth
import { useAuth } from "../../context/AuthContext";




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

function Home() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" bg-gradient-to-b  from-background to-[#24282E] h-screen w-screen pt-3">
      
      <Sidebar />
      <h1 className="mt-3  font-extrabold text-center text-2xl text-secondary">
        {" "}
        ¿Que quieres comer hoy? <br />  {user.displayName || user.email}
      </h1>
      <Search />
      <Categorias />
      
    </div>
  );
}

export default Home;
