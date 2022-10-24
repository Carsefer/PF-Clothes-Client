import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, us }) => {
  if (!us) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};
