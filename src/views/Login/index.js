import { useRef } from "react";

// Services
import loginService from "../../services/loginService";

// Components
import PageWithGradient from "../../layouts/PageWithGradient";
import { Container, Form, Title } from "./LoginElements";
import Input from "../../components/Input";
import TextLink from "../../components/TextLink";
import Button from "../../components/Button";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();
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
          if (user.message === "LOGIN_SUCCESSFUL") {
            window.localStorage.setItem("USER_DATA", JSON.stringify(user));
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          const { message } = error.response.data;
          if (message === "INVALID_CREDENTIALS")
            alert("login: email o password invalidos");

          if (message === "FATAL_SERVER_ERROR")
            alert("login: error fatal en el server");
        });
    } else {
      alert("login: campos vacios.");
    }
  };

  return (
    <PageWithGradient>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Iniciar Sesión</Title>
          <Input
            name={"email"}
            type={"email"}
            label={"Correo electrónico"}
            ref={EmailInput}
          />
          <Input
            name={"password"}
            type={"password"}
            label={"Contraseña"}
            ref={PasswordInput}
          />
          <TextLink to={"/reset-password"}>¿Olvidaste tu contraseña?</TextLink>
          <Button>Entrar</Button>
          <span>
            ¿necesito una cuenta?{" "}
            <TextLink to={"/reset-password"}>Registrarse</TextLink>
          </span>
        </Form>
      </Container>
    </PageWithGradient>
  );
}
