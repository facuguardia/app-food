// Esta es una alerta que se muestra cuando el usuario no ha iniciado sesión o no ha iniciado sesión correctamente. Se muestra en la pantalla de inicio de sesión y en la pantalla de registro. Se puede reutilizar en cualquier otro lugar donde se necesite mostrar una alerta.

function Alert({ message }) {
  return (
    <div className="bg-red-200 border border-red-700 text-red-700 font-medium px-4 py-3 rounded relative mb-2 text-center">
      <span className="sm:inline block">{message}</span>
    </div>
  );
}

export default Alert;
