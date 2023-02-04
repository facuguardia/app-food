import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalOffer, MdOutlineFavoriteBorder } from "react-icons/md";
import { BiExit } from "react-icons/bi";


function Sidebar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
    <div className={`${!menu && "hidden"} bg-gray-500/60 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setMenu(false)}></div>
      <div
        className={`bg-gray-500/60 backdrop-blur-sm h-screen fixed lg:static w-[60%] md:w-[40%] z-50 top-0 lg:w-full transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Nav */}
        <div className="bg-secondary p-8 rounded-r-2xl  h-screen top-0 flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8 pt-32">
            <Link
              href="#"
              className=" font-normal flex items-center gap-4 text-white  hover:border-b-2 hover:border-white transition ease-in duration-500 py-2 px-4  hover:bg-primary-900/50 text-xl"
            >
              <CgProfile /> Perfil
            </Link>
            <Link
              href="#"
              className=" font-normal flex items-center gap-4 text-white   hover:border-b-2 hover:border-white transition ease-in duration-500 py-2 px-4   hover:bg-primary-900/50   text-xl"
            >
              <BsCartDash /> Orden
            </Link>
            <Link
              href="#"
              className="  font-normal flex items-center gap-4 text-white  hover:border-b-2 hover:border-white transition ease-in duration-500 py-2 px-4  hover:bg-primary-900/50  text-xl"
            >
              <MdOutlineLocalOffer /> 
              Favoritos
            </Link>
            <Link
              href="#"
              className="  font-normal flex items-center gap-4 text-white  hover:border-b-2 hover:border-white transition ease-in duration-500 py-2 px-4  hover:bg-primary-900/50 text-xl"
            >
              <MdOutlineFavoriteBorder /> Ofertas
            </Link>
          </nav>
          <div className="bg-primary-900/50 rounded-xl p-3">
            <Link
              to="/"
              className="text-white text-xl font-extrabold flex items-center gap-3  hover:border-b-2 hover:border-white transition ease-in duration-500 py-2 px-4"
            >
              <BiExit className="text-4xl " />

              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed bg-primary right-5 bottom-4 text-xl p-2.5 rounded-full text-white z-50"
      >
        {menu ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
     
    </>
  );
}

export default Sidebar;
