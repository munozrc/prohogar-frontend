import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

// Custom Hooks
import useUser from "../hooks/useUser";

// Custom Components
import PageWithGradient from "../layouts/PageWithGradient";
import FormElement from "../components/Form";
import Input from "../components/Input";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import { TitleForm } from "../components/TitleForm";

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
      <FormElement login onSubmit={handleSubmit}>
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
      </FormElement>
    </PageWithGradient>
  );
}
