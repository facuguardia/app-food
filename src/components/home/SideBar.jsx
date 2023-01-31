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
      <div
        className={`bg-primary h-screen fixed lg:static w-[60%] md:w-[40%] z-50 lg:w-full transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Nav */}
        <div className="bg-secondary/70 p-8  rounded-tr-[100px] h-[100vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8 pt-32">
            <Link
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <CgProfile /> Perfil
            </Link>
            <Link
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <BsCartDash /> Compras
            </Link>
            <Link
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <MdOutlineLocalOffer /> Favoritos
            </Link>
            <Link
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <MdOutlineFavoriteBorder /> Ofertas
            </Link>
          </nav>
          <div className="bg-primary-900/50 rounded-xl p-3">
            <Link
              to="/"
              className="text-white font-bold flex items-center gap-3"
            >
              <BiExit className="text-2xl" />
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
