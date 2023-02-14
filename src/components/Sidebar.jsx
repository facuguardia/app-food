import React from "react";
import { Link } from "react-router-dom";

// icons
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalOffer, MdOutlineFavoriteBorder } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { RiHome3Line } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";

function Sidebar({handleMenu, menu}) {
    
   
return (
    <>
      {/* Boton Sidebar */}
      <button
        onClick={handleMenu}
        className={`absolute top-[422px] items-center shadow-md pt-3 pb-3 pr-.5 pl-0 rounded-r-3xl text-white text-3xl font-bold bg-secondary motion-safe:animate-pulse`}
      >
        <BiChevronRight />
      </button>
      {/* Contenedor Sidebar */}
      <div
        className={`bg-secondary h-screen fixed w-[20%] flex flex-col justify-between items-center p-5 pt-16 rounded-r-3xl z-50 transition-all duration-300 ${
            menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Menu Sidebar */}
        <nav className="flex flex-col items-center gap-10 text-gray-300 text-4xl">
          {/* Item */}
          <Link to="/home">
            <RiHome3Line />
          </Link>
          {/* Item */}
          <Link to="#">
            <CgProfile />
          </Link>
          {/* Item */}
          <Link to="#">
            <MdOutlineLocalOffer />
          </Link>
          {/* Item */}
          <Link to="#">
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
    </>
  );
}

export default Sidebar