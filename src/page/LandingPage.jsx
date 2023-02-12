import { Link } from "react-router-dom";
// Imagenes
import imgLanding from "../assets/logo-landing.png";

function Landing() {
  return (
    // Contenedor principal
    <div className="flex flex-col justify-center items-center gap-16 overflow-hidden">
      {/* Logo */}
      <img src={imgLanding} className="origin-center rotate-12 scale-110  " />
      {/* Boton para ingresar a la app*/}
      <button className="bg-secondary rounded-full py-2 px-8 shadow-md shadow-gray-400 font-bold text-gray-700">
        <Link to="/login">
          <h2 className="text-gray-700 ">Pedilo ya !</h2>
        </Link>
      </button>
    </div>
  );
}

export default Landing;
