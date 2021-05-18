import React, { useRef } from "react";

// Styles
import { Form, LineItem, LinkForm, Title } from "./styles";

// Services
import { loginService } from "../../services/loginService";

// Components
import ButtonGeneric from "../../components/common/ButtonGeneric";
import InputGeneric from "../../components/common/InputGeneric";

// Constants
import {
  FATAL_SERVER_ERROR,
  INVALID_CREDENTIALS,
  LOGIN_SUCCESSFUL,
} from "../../constants";
import ContainerCenter from "../../components/layouts/ContainerCenter";

export default function Login() {
  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = EmailInput.current.value;
    const password = PasswordInput.current.value;

    if (email !== "" && password !== "") {
      loginService({
        email,
        password,
      })
        .then((user) => {
          if (user.message === LOGIN_SUCCESSFUL) {
            window.localStorage.setItem("USER_DATA", JSON.stringify(user));
            this.props.history.push("/dashboard");
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
  };

  return (
    <ContainerCenter>
      <Form onSubmit={handleSubmit}>
        <Title>
          <LineItem widthLine={"85px"} /> Iniciar Sesión
          <LineItem widthLine={"85px"} />
        </Title>
        <InputGeneric
          typeInput="email"
          name="email"
          placeHolder="Ingrese Correo electrónico"
          ref={EmailInput}
          label="Correo electrónico del usuario"
        />
        <InputGeneric
          typeInput="password"
          name="password"
          placeHolder="Ingrese Contraseña"
          ref={PasswordInput}
          label="Contraseña"
        />
        <ButtonGeneric typeButton="submit" center={true} value={"Entrar"} />
        <LinkForm to={"/"}>Recuperar Cuenta</LinkForm>
        <LineItem widthLine={"100%"} marginBottom={"0.6em"} />
      </Form>
    </ContainerCenter>
  );
}
