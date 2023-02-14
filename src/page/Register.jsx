import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Context
import { useAuth } from "../context/AuthContext";
// Components
import Alert from "../Alert";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  // Manejador de eventos para los inputs
  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Manejador de eventos para el submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // Contenedor del formulario
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      {/* Formulario de registro */}
      <form
        onSubmit={handleSubmit}
        className=" bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Usuario */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-fold mb-2"
          >
            Usuario
          </label>
          <input
            type="email"
            name="email"
            placeholder="correo@correo.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        {/* Contraseña */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-300 text-sm font-fold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        {/* Boton de registro */}
        <button className="bg-secondary text-gray-700 font-semibold text-md py-2 px-4 rounded">
          Registrate
        </button>
      </form>
      {/* Link para ir al login */}
      <p className="my-4 text-sm flex justify-between px-3">
        Ya tienes una cuenta ?<Link to="/login">Ingresar</Link>
      </p>
    </div>
  );
}

export default Register;
