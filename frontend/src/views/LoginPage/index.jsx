import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <form>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Ingrese Email" />
        <input
          type="password"
          name="password"
          placeholder="Ingrese Contraseña"
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    );
  }
}

export default LoginPage;
