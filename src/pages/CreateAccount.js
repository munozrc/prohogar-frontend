import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

// Custom Components
import { ContainerSimple } from "../layouts/ContainerSimple";
import PhotoPreview from "../components/PhotoPreview";
import PageWithGradient from "../layouts/PageWithGradient";
import Input from "../components/Input";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import TextLink from "../components/TextLink";
import ComboBox from "../components/ComboBox";
import Welcome from "./Welcome";

// Custom Hooks
import useUser from "../hooks/useUser";

export default function CreateAccount(props) {
  const { register, clearError, isLoading, messageError, showWelcome } =
    useUser();
  const { type } = useParams();
  const NameInput = useRef(null);
  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);
  const PhotoInput = useRef(null);
  const CInput = useRef(null);
  const CheckBoxInput = useRef(null);

  useEffect(() => {
    if (messageError !== "") {
      toast.error(messageError);
      clearError();
    }
  }, [messageError, clearError]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      const name = NameInput.current.value;
      const email = EmailInput.current.value;
      const password = PasswordInput.current.value;
      const photo = PhotoInput.current.currentSrc;
      const category = CInput.current !== null ? CInput.current.value : "";
      const checkbox = CheckBoxInput.current.checked;
      register({
        name,
        email,
        password,
        checkbox,
        type,
        category,
        photo,
      });
    }
  };

  // type no validated
  if (type !== "client" && type !== "professional") props.history.push("/");

  return (
    <PageWithGradient>
      <ContainerSimple>
        {showWelcome ? (
          <Welcome />
        ) : (
          <Form onSubmit={handleSubmit}>
            <PhotoPreview
              title={type === "professional" ? "Profesional" : "Cliente"}
              ref={PhotoInput}
            />
            {type === "professional" && (
              <ComboBox
                name={"Categoria"}
                label={"Seleccione categoria"}
                marginTop="12px"
                options={["Albanil", "Mudanzas", "Plomero", "Tapicero"]}
                ref={CInput}
              />
            )}
            <Input
              name={"name-user"}
              type={"text"}
              label={"Nombres"}
              ref={NameInput}
              marginTop={"12px"}
            />
            <Input
              name={"email"}
              type={"email"}
              label={"Correo electrónico"}
              ref={EmailInput}
              marginTop={"12px"}
            />
            <Input
              name={"password"}
              type={"password"}
              label={"Contraseña"}
              ref={PasswordInput}
              marginTop={"12px"}
            />
            <CheckBox ref={CheckBoxInput}>
              He leído y acepto las Condiciones del Servicio y la Política de
              Privacidad de Prohogar
            </CheckBox>
            <Button>{isLoading ? "Cargando..." : "Continuar"}</Button>
            <TextLink to={"/login"}>¿Ya tienes una cuenta?</TextLink>
          </Form>
        )}
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
    margin: 5px 0px;
  }

  @media (max-width: 520px) {
    margin: 100px 0px 30px 0px;
  }
`;
