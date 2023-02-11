import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Iconos
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// Componentes
import Alert from "./Alert";
// Contexto
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  // Manejador de cambios en los inputs
  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Manejador de envio de formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email && !user.password)
      return setError("Por favor ingrese su correo y contraseña");
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  // Manejador de inicio de sesión con Google
  const handleGoogleSignin = async () => {
    try {
      await loginGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  // Manejador de envio de correo para restablecer contraseña
  const handleResetPassword = async () => {
    if (!user.email) return setError("Por favor ingrese su correo");
    try {
      await resetPassword(user.email);
      setError(
        "Enlace enviado a su correo electrónico, revisa tu bandeja de spam"
      );
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    // Contenedor principal
    <div className=" w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      {/* Formulario de inicio de secion */}
      <form
        onSubmit={handleSubmit}
        className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
        {/* Botones de inicio de sesión */}
        <div className="flex items-center justify-between">
          <button className="bg-secondary hover:bg-secondary/50 text-gray-700 font-medium text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Ingresar
          </button>
          {/* Enlace para restablecer contraseña */}
          <a
            href="#!"
            className="inline-block ml-12 align-baseline font-semibold text-sm text-blue-500 hover:text-blue-300"
            onClick={handleResetPassword}
          >
            Has olvidado tu contraseña ?
          </a>
        </div>
      </form>
      {/* Ruta a registro */}
      <p className="my-4 text-sm flex justify-between px-3">
        No estás registrado ?<Link to="/register">Registrate</Link>
      </p>
      {/* Botones de redes sociales */}
      <div className="flex justify-end items-center gap-4 pt-5 pr-3">
        <button onClick={handleGoogleSignin} className="">
          <FaGoogle className="text-3xl shadow-md" />
        </button>
        <button onClick={handleGoogleSignin} className="">
          <FaFacebook className="text-3xl shadow-md" />
        </button>
      </div>
    </div>
  );
}

export default Login;
