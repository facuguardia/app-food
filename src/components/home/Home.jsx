import React from "react";
// Components
import Categorias from "./Categorias";
import Sidebar from "./Sidebar";
// Auth
import { useAuth } from "../../context/AuthContext";


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

function Home() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-end">
        <Sidebar />
      </div>
      <h1 className="ml-5 mt-5 font-bold text-left text-lg text-secondary">
        {" "}
        COMIDA DELICIOSA <br /> PARA VOS... {user.displayName || user.email}
      </h1>
      <Categorias />
    </div>
  );
}

export default Home;
