import React from "react";
import imgLanding from "../assets/logo.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 overflow-hidden">
      <img src={imgLanding} className="origin-center rotate-12 scale-110  " />

      <button className="bg-secondary rounded-full py-2 px-8 shadow-md shadow-gray-400 font-bold text-gray-700">
        <Link to="/login">
          <h2 className="text-gray-700 ">Pedilo ya !</h2>
        </Link>
      </button>
    </div>
  );
}

export default Landing;
