import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Services
import loginService from "../services/loginService";

// Assets
import LogoSVG from "../assets/logo.svg";

// Components
import WaveForm from "../components/common/WaveForm";
import ButtonGeneric from "../components/common/ButtonGeneric";
import InputGeneric from "../components/common/InputGeneric";

// Constants
import {
  DASHBOARD_ROUTE,
  FATAL_SERVER_ERROR,
  HOME_ROUTE,
  INVALID_CREDENTIALS,
  LOGIN_SUCCESSFUL,
  USER_DATA,
} from "../constants";

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flexbox;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(87, 105, 170, 0.25) 0%,
      rgba(35, 39, 42, 0.25) 100%
    ),
    #23272a;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 450px;
  background: rgba(153, 170, 181, 0.1);
  border-radius: 35px;
  padding: 2em 3.2em;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 1.8em;
  line-height: 48px;
  color: #fff;
  text-align: center;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoIcon = styled.img`
  position: absolute;
  position: absolute;
  width: 15em;
  left: 3.75em;
  top: 2.9375em;
  cursor: pointer;
`;

const LineItem = styled.div`
  display: inline-block;
  min-width: ${({ widthLine }) => widthLine}; //85px default
  min-height: 1px;
  margin-top: 0.2em;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom === "" ? "0" : marginBottom};
  background-color: #fff;
`;

const LinkForm = styled(Link)`
  margin: 1em auto;
  font-size: 1.1em;
  color: #7289da;
`; // END Styled Components

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const email = this.emailInput.current.value;
    const password = this.passwordInput.current.value;

    try {
      if (email !== "" && password !== "") {
        const dataUser = await loginService({
          email,
          password,
        });
        if (dataUser.message === LOGIN_SUCCESSFUL) {
          window.localStorage.setItem(USER_DATA, JSON.stringify(dataUser));
          this.props.history.push(DASHBOARD_ROUTE);
        }
      } else {
        alert("login: campos vacios.");
      }
    } catch (error) {
      if (error.response.data.message === INVALID_CREDENTIALS) {
        alert("login: email o password invalidos");
      } else if (error.response.data.message === FATAL_SERVER_ERROR) {
        alert("login: error fatal en el server");
      }
    }
  }

  render() {
    return (
      <Container>
        <Link to={HOME_ROUTE}>
          <LogoIcon src={LogoSVG} />
        </Link>
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
          <ButtonGeneric typeButton="submit" center={true}>
            Entrar
          </ButtonGeneric>
          <LinkForm to={HOME_ROUTE}>Recuperar Cuenta</LinkForm>
          <LineItem widthLine={"100%"} marginBottom={"0.6em"} />
        </Form>
        <WaveForm up={false} />
        <WaveForm up={true} />
      </Container>
    );
  }
}

export default LoginPage;
