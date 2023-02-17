import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Componentes
import Sidebar from "../components/Sidebar";

const Profile = () => {
  // Estado del sidebar
  const [menu, setMenu] = useState(false);
  // Funcion para abrir y cerrar el sidebar
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Capturar los datos del formulario
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
    // getValues, captura los valores de los campos
  } = useForm();

  // Redireccionar a otra pagina
  const navigate = useNavigate();

  // Capturar los datos del formulario y enviarlos a otra pagina
  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/payment");
  };

  // Capturar el valor del checkbox
  const includePhone = watch("includePhone");

  return (
    // Contenedor del formulario
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <Sidebar handleMenu={handleMenu} menu={menu} />
    <form
      className="w-full h-screen flex flex-col justify-center items-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
      onClick={() => {
        if (menu) {
          handleMenu();
        }
      }}
    >
      {/* Nombre y Apellido */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 text-lg ml-4">Nombre</label>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          autoComplete="off"
          name="name"
          className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <p className="text-red-500 text-sm pl-4">Requerido</p>
        )}
      </div>

      {/* Domicilio */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 text-lg ml-4">Domicilio</label>
        <input
          type="text"
          placeholder="Cané 123"
          autoComplete="off"
          className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          {...register("address", { required: true })}
        />
        {errors.address?.type === "required" && (
          <p className="text-red-500 text-sm pl-4">Requerido</p>
        )}
      </div>

      {/* Ciudad */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 text-lg ml-4">Ciudad</label>
        <input
          type="text"
          placeholder="Mendoza"
          autoComplete="off"
          className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          {...register("city", { required: true })}
        />
        {errors.city?.type === "required" && (
          <p className="text-red-500 text-sm pl-4">Requerido</p>
        )}
      </div>

      {/* Correo */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 text-lg ml-4">Correo Electrónico</label>
        <input
          type="text"
          placeholder="correo@correo.com"
          autoComplete="off"
          className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          {...register("email", {
            required: true,
            pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
          })}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500 text-sm pl-4">Requerido</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500 text-sm pl-4">
            Correo electrónico invalido
          </p>
        )}
      </div>

      {/* Observación */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 text-lg ml-4 text-center">
          Observación
        </label>
        <textarea
          placeholder="Ingrese su mensaje"
          autoComplete="off"
          className="bg-gray-800 text-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent w-60"
          {...register("message")}
        ></textarea>
      </div>

      {/* Checkbox */}
      <div className="flex gap-2">
        <label>¿Incluir teléfono?</label>
        <input type="checkbox" {...register("includePhone")} />
      </div>

      {/* Telefono */}
      {includePhone && (
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="261 15 123456"
            autoComplete="off"
            className="bg-gray-800 text-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            {...register("phone")}
          />
        </div>
      )}

      {/* Boton */}
      <button
        type="submit"
        className="w-60 bg-secondary text-gray-700 font-semibold rounded-full px-10 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
      >
        Enviar
      </button>
    </form>
  </div>
  );
};

export default Profile;
