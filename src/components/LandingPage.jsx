import React from "react";
import imgLanding from "../assets/logo-3.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className=" bg-gradient-to-b from-[#24282E] to-background flex items-center flex-col h-screen w-screen">
      <img src={imgLanding} alt="a" className="relative top-32 scale-75" />
      
      
        <button className="bg-secondary shadow-sm shadow-[#15181b] hover:shadow-[#15181b] hover:shadow-lg rounded-xl max-w-md py-4 w-1/2 absolute top-90% hover:top-89% transition-all duration-150 font-bold font-lato "><Link to="/login">
        Get started</Link>
        </button>
      
    </div>
  );
}

export default Landing;
