import { useRef } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Form } from "./CreateAccountElements";
import PageWithGradient from "../../layouts/PageWithGradient";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PhotoPreview, { checkDefaultImage } from "../../components/PhotoPreview";
import CheckBox from "../../components/CheckBox";
import TextLink from "../../components/TextLink";
import ComboBox from "../../components/ComboBox";
import loginService from "../../services/registerService";
import { saveDataUser } from "../../utils/saveDataUser";

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
                alert("login: el email ya esta registrado");
              } else if (message === "FATAL_SERVER_ERROR") {
                alert("login: error fatal en el server");
              }
            });
        } else {
          alert("Falta seleccionar categoria");
        }
      } else {
        alert(
          "Para continuar debe aceptar las Condiciones del Servicio y la Política de Privacidad de Prohogar"
        );
      }
    } else {
      alert("Campos vacíos");
    }
  };

  // type no validated
  if (type !== "client" && type !== "professional") history.push("/");

  return (
    <PageWithGradient minHeight={type === "professional" ? "860px" : "800px"}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <PhotoPreview
            title={type === "professional" ? "profesional" : "cliente"}
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
      </Container>
    </PageWithGradient>
  );
}
