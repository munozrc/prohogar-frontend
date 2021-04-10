import React from "react";
import NormalButton from "../components/NormalButton";
import registerService from "../services/registerService";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: this.props.match.params.type,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await registerService({
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
      });
      window.localStorage.setItem("AppUser", JSON.stringify(user));
      this.props.history.push("/welcome");
    } catch (error) {
      console.error("register: ", error);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registrarse</h2>
        <input type="text" name="name" id="name" placeholder="Ingrese Nombre" />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Ingrese Apellido"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese Correo"
          onChange={({ target }) => this.setState({ email: target.value })}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese Contraseña"
          onChange={({ target }) => this.setState({ password: target.value })}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Confirme Contraseña"
        />
        <NormalButton typeButton="submit" center={true}>
          Crear Cuenta
        </NormalButton>
      </form>
    );
  }
}

export default CreateAccount;