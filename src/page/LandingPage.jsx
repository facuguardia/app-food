import { Link } from "react-router-dom";
// Imagenes
import imgLanding from "../assets/logo-landing.png";

function Landing() {
  return (
    // Contenedor principal
    <div className="flex flex-col justify-center items-center gap-12 overflow-hidden min-h-screen ">
      {/* Logo */}
      <img src={imgLanding} className="rotate-12 scale-10 ml-5" />
      {/* Boton para ingresar a la app*/}
      <Link to="/login">
        <button className="rounded-full border shadow-md shadow-gray-400 font-bold text-secondary py-2 px-10">
          <h1 className="text-xl">Pedilo ya !</h1>
        </button>
      </Link>
    </div>
  );
}

export default Landing;
