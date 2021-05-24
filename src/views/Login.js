import styled from "styled-components";
import { useRef } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

// Utils and Hooks
import loginService from "../services/loginService";
import { saveDataUser } from "../utils/saveDataUser";

// Custom Components
import PageWithGradient from "../layouts/PageWithGradient";
import Input from "../components/Input";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import { ContainerSimple } from "../layouts/ContainerSimple";
import { TitleForm } from "../layouts/TitleForm";

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
        .then((response) => {
          if (response.message === "LOGIN_SUCCESSFUL") {
            saveDataUser(response);
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          const { message } = error.response.data;
          if (message === "INVALID_CREDENTIALS")
            toast.error("Email o password invalidos");

          if (message === "FATAL_SERVER_ERROR")
            toast.error("Error fatal en el server");
        });
    } else {
      toast.error("Campos vacíos.");
    }
  };

  return (
    <PageWithGradient>
      <ContainerSimple>
        <Form onSubmit={handleSubmit}>
          <TitleForm>Iniciar Sesión</TitleForm>
          <Input
            name={"email"}
            type={"email"}
            label={"CORREO ELECTRONICO"}
            ref={EmailInput}
          />
          <Input
            name={"password"}
            type={"password"}
            label={"CONTRASEÑA"}
            ref={PasswordInput}
          />
          <TextLink to={"/restorepassword"}>¿Olvidaste tu contraseña?</TextLink>
          <Button>Entrar</Button>
          <span>
            ¿necesito una cuenta?{" "}
            <TextLink to={"/register"}>Registrarse</TextLink>
          </span>
        </Form>
      </ContainerSimple>
    </PageWithGradient>
  );
}

const Form = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  padding: 30px;
  margin: 30px 0px;

  & > button {
    margin-top: 15px;
  }

  & > a {
    margin-top: 5px;
  }

  & > span {
    color: ${({ theme }) => theme.labelColor};
    font-size: 14px;
    margin-top: 5px;
  }

  @media (max-width: 520px) {
    margin: 100px 0px 30px 0px;
  }
`;
