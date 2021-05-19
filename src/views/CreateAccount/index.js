import { useRef } from "react";
import { useParams } from "react-router";
import { Container, Form } from "./CreateAccountElements";
import PageWithGradient from "../../layouts/PageWithGradient";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PhotoPreview from "../../components/PhotoPreview";
import CheckBox from "../../components/CheckBox";
import TextLink from "../../components/TextLink";
import ComboBox from "../../components/ComboBox";

export default function CreateAccount() {
  const { type } = useParams();
  const NameInput = useRef(null);
  const EmailInput = useRef(null);
  const PasswordInput = useRef(null);
  return (
    <PageWithGradient minHeight={"840px"}>
      <Container>
        <Form>
          <PhotoPreview
            title={type === "professional" ? "profesional" : "cliente"}
          />
          <ComboBox
            name={"Categoria"}
            label={"Seleccione categoria"}
            marginTop="12px"
            options={["Albanil", "Mudanzas", "Plomero", "Tapicero"]}
          />
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
          <CheckBox />
          <Button>Continuar</Button>
          <TextLink to={"/login"}>¿Ya tienes una cuenta?</TextLink>
        </Form>
      </Container>
    </PageWithGradient>
  );
}
