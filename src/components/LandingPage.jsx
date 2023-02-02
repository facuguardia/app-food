import React from "react";
import imgLanding from "../assets/logo-1.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className=" bg-gradient-to-b from-[#24282E] to-[#15181b] flex items-center flex-col h-screen w-screen">
      <img src={imgLanding} alt="a" className="relative top-32 scale-75" />
      <h2 className="relative text-center top-36 text-[#E58326] font-bold text-4xl">
         ¡Delicious food at one click!
      </h2>
      
        <button className="bg-[#E58326] shadow-sm shadow-[#15181b] hover:shadow-[#15181b] hover:shadow-lg rounded-xl py-4 w-1/2 absolute top-90% hover:top-89% transition-all duration-150 "><Link to="/login">
        Get started</Link>
        </button>
      
    </div>
  );
}

export default Landing;
