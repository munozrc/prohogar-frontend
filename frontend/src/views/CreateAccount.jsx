import React from "react";

// Constants
import {
  PROFESSIONAL_USER,
  USER_DATA,
  WELCOME_ROUTE,
  CATEGORIES,
} from "../constants";

// Assets
import DefaultProfileImage from "../assets/profile-image.jpg";

// Components
import ButtonGeneric from "../components/common/ButtonGeneric";
import ComboBoxGeneric from "../components/common/ComboBoxGeneric";
import ProfilePictureUploader from "../components/common/LoaderProfileImage";

// Services
import registerService from "../services/registerService";
import InputGeneric from "../components/common/InputGeneric";

const checkURLProfileImage = (url, defaultURL) => {
  return url === defaultURL ? "" : url;
};

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: this.props.match.params.type,
    };

    this.loaderImg = React.createRef();
    this.nameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.cpasswordInput = React.createRef();
    this.category = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const name = this.nameInput.current.value;
    const lastName = this.lastNameInput.current.value;
    const email = this.emailInput.current.value;
    const password = this.passwordInput.current.value;
    const cpassword = this.cpasswordInput.current.value;
    // const category = this.category.current.value;
    const role = this.state.role;

    if (
      name !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      cpassword !== ""
    ) {
      if (password === cpassword) {
        const profileImage = checkURLProfileImage(
          this.loaderImg.current.src,
          DefaultProfileImage
        );
        try {
          const user = await registerService({
            email,
            password,
            profileImage,
            role,
            category: "", // TODO: Change this
          });
          window.localStorage.setItem(USER_DATA, JSON.stringify(user));
          this.props.history.push(WELCOME_ROUTE);
        } catch (error) {
          console.error("register: ", error);
        }
      } else {
        alert("Register: las contraseñas no coinciden");
      }
    } else {
      alert("Register: campos vacios");
    }
  }
  render() {
    let ComboBoxCatergory;
    if (this.state.role === PROFESSIONAL_USER)
      ComboBoxCatergory = (
        <ComboBoxGeneric
          label="Seleccione su Categoria"
          name="category"
          options={CATEGORIES}
          placeHolder="Seleccione"
        />
      );
    return (
      <form onSubmit={this.handleSubmit} style={{ backgroundColor: "#444" }}>
        <h2>Registrarse</h2>
        {ComboBoxCatergory}
        <ProfilePictureUploader ref={this.loaderImg} />
        <InputGeneric
          typeInput="text"
          name="name"
          placeHolder="Ingrese Nombre"
          ref={this.nameInput}
        />
        <InputGeneric
          typeInput="text"
          name="lastname"
          placeHolder="Ingrese Apellido"
          ref={this.lastNameInput}
        />
        <InputGeneric
          typeInput="email"
          name="email"
          placeHolder="Ingrese Correo Electronico"
          ref={this.emailInput}
        />
        <InputGeneric
          typeInput="password"
          name="password"
          placeHolder="Ingrese Contraseña"
          ref={this.passwordInput}
        />
        <InputGeneric
          typeInput="password"
          name="cpassword"
          placeHolder="Confirme Contraseña"
          ref={this.cpasswordInput}
        />
        <ButtonGeneric typeButton="submit" center={true}>
          Crear Cuenta
        </ButtonGeneric>
      </form>
    );
  }
}

export default CreateAccount;
