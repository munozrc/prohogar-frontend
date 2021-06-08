import { useRef } from "react";

// Custom Hooks
import useUser from "../hooks/useUser";

// Custom Components
import PageWithGradient from "../layouts/PageWithGradient";
import FormElement from "../components/Form";
import Input from "../components/Input";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { TitleForm } from "../components/TitleForm";

export default function Login() {
  const { login, isLoading } = useUser();

  const EmailInput = useRef(null);
  const PasswordInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      const email = EmailInput.current.value;
      const password = PasswordInputRef.current.value;
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
        <PasswordInput
          name={"password"}
          type={"password"}
          label={"CONTRASEÑA"}
          ref={PasswordInputRef}
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
