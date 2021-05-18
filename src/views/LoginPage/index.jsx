import React from "react";

// Styles
import { Form, LineItem, LinkForm, Title } from "./styles";

// Services
import { loginService } from "../../services/loginService";

// Components
import ButtonGeneric from "../../components/common/ButtonGeneric";
import InputGeneric from "../../components/common/InputGeneric";

// Constants
import {
  DASHBOARD_ROUTE,
  FATAL_SERVER_ERROR,
  HOME_ROUTE,
  INVALID_CREDENTIALS,
  LOGIN_SUCCESSFUL,
  USER_DATA,
} from "../../constants";
import ContainerCenter from "../../components/layouts/ContainerCenter";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const email = this.emailInput.current.value;
    const password = this.passwordInput.current.value;

    if (email !== "" && password !== "") {
      loginService({
        email,
        password,
      })
        .then((user) => {
          if (user.message === LOGIN_SUCCESSFUL) {
            window.localStorage.setItem(USER_DATA, JSON.stringify(user));
            this.props.history.push(DASHBOARD_ROUTE);
          }
        })
        .catch((error) => {
          if (error.response.data.message === INVALID_CREDENTIALS) {
            alert("login: email o password invalidos");
          } else if (error.response.data.message === FATAL_SERVER_ERROR) {
            alert("login: error fatal en el server");
          }
        });
    } else {
      alert("login: campos vacios.");
    }
  }

  render() {
    return (
      <ContainerCenter>
        <Form onSubmit={this.handleSubmit}>
          <Title>
            <LineItem widthLine={"85px"} /> Iniciar Sesión
            <LineItem widthLine={"85px"} />
          </Title>
          <InputGeneric
            typeInput="email"
            name="email"
            placeHolder="Ingrese Correo electrónico"
            ref={this.emailInput}
            label="Correo electrónico del usuario"
          />
          <InputGeneric
            typeInput="password"
            name="password"
            placeHolder="Ingrese Contraseña"
            ref={this.passwordInput}
            label="Contraseña"
          />
          <ButtonGeneric typeButton="submit" center={true} value={"Entrar"} />
          <LinkForm to={HOME_ROUTE}>Recuperar Cuenta</LinkForm>
          <LineItem widthLine={"100%"} marginBottom={"0.6em"} />
        </Form>
      </ContainerCenter>
    );
  }
}

export default LoginPage;
