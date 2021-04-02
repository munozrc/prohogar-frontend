import React from "react";
import loginService from "../../services/loginService";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await loginService({
        email: this.state.email,
        password: this.state.password,
      });

      window.localStorage.setItem("AppUser", JSON.stringify(user));
    } catch (error) {
      console.error("login: ", error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Ingrese Email"
          onChange={({ target }) => this.setState({ email: target.value })}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Ingrese Contraseña"
          onChange={({ target }) => this.setState({ password: target.value })}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    );
  }
}

export default LoginPage;
