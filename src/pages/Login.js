import styled from "styled-components";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

// Custom Hooks
import useUser from "../hooks/useUser";

// Custom Components
import PageWithGradient from "../layouts/PageWithGradient";
import Input from "../components/Input";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import { ContainerSimple } from "../layouts/ContainerSimple";
import { TitleForm } from "../layouts/TitleForm";

export default function Login() {
  const { login, clearError, isLoading, messageError } = useUser();

  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);

  useEffect(() => {
    if (messageError !== "") {
      toast.error(messageError);
      clearError();
    }
  }, [messageError, clearError]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      const email = EmailInput.current.value;
      const password = PasswordInput.current.value;
      login({ email, password });
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
          <Button>{isLoading ? "Cargando..." : "Entrar"}</Button>
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
  transition: opacity 0.3s ease;

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
