import { Link } from "react-router-dom";
// Imagenes
import imgLanding from "../assets/landing-logo.png";
// Iconos
import { SiInstagram, SiFacebook, SiTwitter, SiWhatsapp } from "react-icons/si";

function Landing() {
  return (
    <div className="flex flex-col justify-center">
      <nav>
        <div className=" hidden lg:flex justify-end items-center h-16 text-secondary relative shadow-sm font-mono pr-10">
          <Link
            to="/"
            className="pl-8 hover:animate-pulse transition-all hover:text-pink-400"
          >
            <SiInstagram />
          </Link>
          <Link
            to="/"
            className="pl-8 hover:animate-pulse transition-all hover:text-blue-700"
          >
            <SiFacebook />
          </Link>
          <Link
            to="/"
            className="pl-8 hover:animate-pulse transition-all hover:text-blue-300"
          >
            <SiTwitter />
          </Link>
          <Link
            to="/"
            className="pl-8 hover:animate-pulse transition-all hover:text-green-500"
          >
            <SiWhatsapp />
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen lg:h-auto overflow-hidden lg:overflow-auto lg:flex-row lg:justify-evenly pt-10">
        {/* Logo */}
        <img src={imgLanding} />
        {/* Boton para ingresar a la app*/}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="invisible lg:visible text-5xl font-bold font-serif text-secondary mb-4">
            Pedí, Comé y Repetí...
          </h1>
          <Link to="/login">
            <button className="rounded-full border shadow-md shadow-gray-400 font-bold text-secondary py-2 px-10 lg:mt-5 lg:hover:animate-pulse transition-all">
              <h1 className="text-xl">Pedilo ya !</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
