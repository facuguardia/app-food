import React from "react";
import MenuInferior from "./MenuInferior";
import Categorias from "./Categorias";
import SideBar from "./SideBar";
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
        <SideBar />
      
      </div>
      <h1 className="ml-5 mt-5 font-bold text-left text-lg text-secondary">
        {" "}
        COMIDA DELICIOSA <br /> PARA VOS... {user.displayName || user.email}
      </h1>
      <Categorias />
      <br />
       <br /> 
       <br /> 
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       
      
       
      <MenuInferior />
    </div>
  );
}

export default Home;
