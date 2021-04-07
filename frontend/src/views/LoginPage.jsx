import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoSVG from "../assets/logo.svg";
import WaveForm from "../components/common/WaveForm";
import NormalButton from "../components/NormalButton";
import NormalInput from "../components/NormalInput";
import loginService from "../services/loginService";

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
`;

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
      <Container>
        <Link to="/">
          <LogoIcon src={LogoSVG} />
        </Link>
        <Form onSubmit={this.handleSubmit}>
          <Title>
            <LineItem widthLine={"85px"} /> Iniciar Sesión
            <LineItem widthLine={"85px"} />
          </Title>
          <NormalInput
            typeInput="email"
            name="email"
            value={this.state.email}
            placeHolder="Ingrese Correo electrónico"
            handleChange={(value) => this.setState({ email: value })}
            label="Correo electrónico del usuario"
          />
          <NormalInput
            typeInput="password"
            name="password"
            value={this.state.password}
            placeHolder="Ingrese Contraseña"
            handleChange={(value) => this.setState({ password: value })}
            label="Contraseña"
          />
          <NormalButton typeButton="submit" center={true}>
            Entrar
          </NormalButton>
          <LinkForm to="/">Recuperar Cuenta</LinkForm>
          <LineItem widthLine={"100%"} marginBottom={"0.6em"} />
        </Form>
        <WaveForm up={false} />
        <WaveForm up={true} />
      </Container>
    );
  }
}

export default LoginPage;
