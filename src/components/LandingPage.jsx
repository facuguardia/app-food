import React from "react";
import imgLanding from "../assets/logo-2.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className=" bg-gradient-to-b from-[#24282E] to-background flex items-center flex-col h-screen w-screen">
      <img src={imgLanding} alt="a" className="relative top-32 scale-75" />
      <h2 className="relative text-center top-36 text-secondary font-bold text-4xl">
         ¡Comidas deliciosas a un solo click!
      </h2>
      
        <button className="bg-secondary shadow-sm shadow-[#15181b] hover:shadow-[#15181b] hover:shadow-lg rounded-xl max-w-md py-4 w-1/2 absolute top-90% hover:top-89% transition-all duration-150 "><Link to="/login">
        Get started</Link>
        </button>
      
    </div>
  );
}

export default Landing;
