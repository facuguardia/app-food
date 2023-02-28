import { Link } from "react-router-dom";
// Imagenes
import imgLanding from "../assets/logo-landing.png";

function Landing() {
  return (
    // Contenedor principal
    <div className="flex flex-col justify-center gap-12 overflow-hidden min-h-screen ">
      <h1 className="text-4xl p-4 font-semibold font-mono">
        Ordena, <br /> disfruta <br /> y repite... <br />
      </h1>
      
      {/* Logo */}
      {/* <img src={imgLanding} className="rotate-12 scale-10 ml-5" /> */}
      {/* Boton para ingresar a la app*/}
      <div className="flex justify-end pr-4">
        <Link to="/login">
          <button className="rounded-full border shadow-md shadow-gray-400 font-bold text-secondary py-2 px-10">
            <h1 className="text-xl">Pedilo ya !</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
