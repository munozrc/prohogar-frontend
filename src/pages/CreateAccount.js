import { useRef } from "react";
import { useParams } from "react-router";

// Custom Components
import PhotoPreview from "../components/PhotoPreview";
import PageWithGradient from "../layouts/PageWithGradient";
import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";
import Button, { ArrowButton } from "../components/Button";
import CheckBox from "../components/CheckBox";
import TextLink from "../components/TextLink";
import ComboBox from "../components/ComboBox";
import FormElement from "../components/Form";
import Welcome from "../components/Welcome";

// Custom Hooks
import useUser from "../hooks/useUser";

export default function CreateAccount(props) {
  const { register, isLoading, showWelcome } = useUser();
  const { type } = useParams();
  const NameInput = useRef(null);
  const EmailInput = useRef(null);
  const PasswordInputRef = useRef(null);
  const PhotoInput = useRef(null);
  const CInput = useRef(null);
  const CheckBoxInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      const name = NameInput.current.value;
      const email = EmailInput.current.value;
      const password = PasswordInputRef.current.value;
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
      {showWelcome ? (
        <Welcome />
      ) : (
        <FormElement register onSubmit={handleSubmit}>
          <ArrowButton onClick={() => props.history.push("/register")} />
          <PhotoPreview
            title={type === "professional" ? "Profesional" : "Cliente"}
            ref={PhotoInput}
          />
          {type === "professional" && (
            <ComboBox
              name={"Categoria"}
              label={"Seleccione categor??a"}
              marginTop="12px"
              options={["Alba??il", "Mudanzas", "Plomero", "Tapicero"]}
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
            label={"Correo electr??nico"}
            ref={EmailInput}
            marginTop={"12px"}
          />
          <PasswordInput
            name={"password"}
            type={"password"}
            label={"Contrase??a"}
            ref={PasswordInputRef}
            marginTop={"12px"}
          />
          <CheckBox ref={CheckBoxInput}>
            He le??do y acepto las Condiciones del Servicio y la Pol??tica de
            Privacidad de Prohogar
          </CheckBox>
          <Button>{isLoading ? "Cargando..." : "Continuar"}</Button>
          <TextLink to={"/login"}>??Ya tienes una cuenta?</TextLink>
        </FormElement>
      )}
    </PageWithGradient>
  );
}
