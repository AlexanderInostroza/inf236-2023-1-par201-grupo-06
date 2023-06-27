import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Realiza la lógica de autenticación aquí
  
      // Si la autenticación es exitosa, establece loggedIn en true
      setLoggedIn(true);
    };
  
    if (loggedIn) {
      return <Navigate to="/nuevoFormulario" />;
    }

    return (
        <div>
        <h2>Iniciar sesión</h2>
        <br />
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
            />
            </label>
            <br />
            <label>
            Password:
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
        </div>
        );
};

export default Login;
