// El componente ProtectedRoute es un componente que se encarga de proteger las rutas que no queremos que sean accesibles por usuarios no autenticados. Para ello, se encarga de verificar si el usuario está autenticado o no, y en caso de que no lo esté, redirige al usuario a la ruta /login.

import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
}

export default ProtectedRoute;