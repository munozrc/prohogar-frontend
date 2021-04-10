import React from "react";

// Constants
import {
  PROFESSIONAL_USER,
  USER_DATA,
  WELCOME_ROUTE,
  CATEGORIES,
} from "../constants";

// Components
import ButtonGeneric from "../components/common/ButtonGeneric";
import ComboBoxGeneric from "../components/common/ComboBoxGeneric";

// Services
import registerService from "../services/registerService";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: this.props.match.params.type,
      category: null,
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
      window.localStorage.setItem(USER_DATA, JSON.stringify(user));
      this.props.history.push(WELCOME_ROUTE);
    } catch (error) {
      console.error("register: ", error);
    }
  }
  render() {
    let ComboBoxCatergory;
    if (this.state.role === PROFESSIONAL_USER)
      ComboBoxCatergory = (
        <ComboBoxGeneric
          label="Seleccione su Categoria"
          name="category"
          options={CATEGORIES}
          placeHolder="Seleccione"
        />
      );
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registrarse</h2>
        {ComboBoxCatergory}
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
          name="cpassword"
          id="cpassword"
          placeholder="Confirme Contraseña"
        />
        <ButtonGeneric typeButton="submit" center={true}>
          Crear Cuenta
        </ButtonGeneric>
      </form>
    );
  }
}

export default CreateAccount;
