import styled from "styled-components";
import { useRef } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

// Custom Components
import { ContainerSimple } from "../layouts/ContainerSimple";
import PhotoPreview, { checkDefaultImage } from "../components/PhotoPreview";
import PageWithGradient from "../layouts/PageWithGradient";
import Input from "../components/Input";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import TextLink from "../components/TextLink";
import ComboBox from "../components/ComboBox";

// Utils and Hooks
import loginService from "../services/registerService";
import saveDataUser from "../utils/saveDataUser";

export default function CreateAccount() {
  const { type } = useParams();
  const history = useHistory();
  const NameInput = useRef(null);
  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);
  const PhotoInput = useRef(null);
  const CInput = useRef(null);
  const CheckBoxInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = NameInput.current.value;
    const email = EmailInput.current.value;
    const password = PasswordInput.current.value;
    const photo = PhotoInput.current.currentSrc;
    const category = CInput.current !== null ? CInput.current.value : "";
    const checkbox = CheckBoxInput.current.checked;

    if (name !== "" && email !== "" && password !== "") {
      if (checkbox) {
        if (
          type === "client" ||
          (category !== "default" && type === "professional")
        ) {
          loginService({
            name,
            email,
            password,
            photo: checkDefaultImage(photo),
            role: type,
            category: category === "" ? undefined : category,
          })
            .then((response) => {
              if (response.message === "SUCCESSFULLY_REGISTERED") {
                saveDataUser(response);
                history.push("/dashboard");
              }
            })
            .catch((error) => {
              const { message } = error.response.data;
              if (message === "USER_ALREADY_EXISTS") {
                toast.error("El email ya esta registrado");
              } else if (message === "FATAL_SERVER_ERROR") {
                toast.error("Error fatal en el server");
              }
            });
        } else {
          toast.warn("Seleccione una Categoria");
        }
      } else {
        toast.warn(
          "Para continuar debe aceptar las Condiciones del Servicio y la Política de Privacidad de Prohogar"
        );
      }
    } else {
      toast.warn("Campos vacíos");
    }
  };

  // type no validated
  if (type !== "client" && type !== "professional") history.push("/");

  return (
    <PageWithGradient>
      <ContainerSimple>
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
          <Button>Continuar</Button>
          <TextLink to={"/login"}>¿Ya tienes una cuenta?</TextLink>
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
    margin: 5px 0px;
  }

  @media (max-width: 520px) {
    margin: 100px 0px 30px 0px;
  }
`;
