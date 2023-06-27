import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ path, ...props }) => {
  const isAuthenticated = /* Agrega aquí la lógica para verificar si el usuario está autenticado */ true;

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
