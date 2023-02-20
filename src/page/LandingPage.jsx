import { Link } from "react-router-dom";
// Imagenes
import imgLanding from "../assets/logo-landing.png";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden lg:flex-row lg:justify-between lg:items-center">
      {/* Logo */}
      <img src={imgLanding} className="rotate-12 scale-10 lg:scale-75" />
      {/* Boton para ingresar a la app*/}
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h1 className="invisible lg:visible text-4xl font-bold font-serif text-gray-300 mb-5">
          La mejor app de Fast Food para satisfacer tus antojos...
        </h1>
        <Link to="/login">
          <button className="rounded-full border shadow-md shadow-gray-400 font-bold text-secondary py-2 px-10 lg:mt-5">
            <h1 className="text-xl">Pedilo ya !</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
