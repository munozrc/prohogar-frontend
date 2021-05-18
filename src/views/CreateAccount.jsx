import React from "react";

// Assets
import DefaultProfileImage from "../assets/profile-image.jpg";

// Components
import ButtonGeneric from "../components/common/ButtonGeneric";
import ComboBoxGeneric from "../components/common/ComboBoxGeneric";
import ProfilePictureUploader from "../components/common/LoaderProfileImage";

// Services
import registerService from "../services/registerService";
import InputGeneric from "../components/common/InputGeneric";

const CATEGORIES = [
  {
    name: "Albanil",
    value: 1,
  },
  {
    name: "Arquitecto",
    value: 2,
  },
  {
    name: "Herrero",
    value: 3,
  },
  {
    name: "Mudanzas",
    value: 4,
  },
  {
    name: "Tapicero",
    value: 5,
  },
  {
    name: "Plomero",
    value: 6,
  },
];

const checkURLProfileImage = (url, defaultURL) => {
  return url === defaultURL ? "" : url;
};

const checkCategoryInput = (input) => {
  let validatedCategory = true;
  let valueCategory = 0;
  if (input.current === null) {
    validatedCategory = true;
  } else {
    if (input.current.value === "default") {
      validatedCategory = false;
    } else {
      validatedCategory = true;
      valueCategory = Number(input.current.value);
    }
  }
  return { validatedCategory, valueCategory };
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
    this.categoryInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const name = this.nameInput.current.value;
    const lastName = this.lastNameInput.current.value;
    const email = this.emailInput.current.value;
    const password = this.passwordInput.current.value;
    const cpassword = this.cpasswordInput.current.value;
    const role = this.state.role;
    const { validatedCategory, valueCategory } = checkCategoryInput(
      this.categoryInput
    );

    if (
      name !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      cpassword !== ""
    ) {
      if (password === cpassword) {
        if (validatedCategory) {
          const profileImage = checkURLProfileImage(
            this.loaderImg.current.src,
            DefaultProfileImage
          );
          try {
            const dataUser = await registerService({
              name,
              lastName,
              email,
              password,
              profileImage,
              role,
              category: valueCategory,
            });
            if (dataUser.message === "SUCCESSFULLY_REGISTERED") {
              window.localStorage.setItem(
                "USER_DATA",
                JSON.stringify(dataUser)
              );
              this.props.history.push("/welcome");
            }
          } catch (error) {
            if (error.response.data.message === "USER_ALREADY_EXISTS") {
              alert("login: el email ya existe");
            } else if (error.response.data.message === "FATAL_SERVER_ERROR") {
              alert("login: error fatal en el server");
            }
          }
        } else {
          alert("Register: Seleccione una categoria");
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
    if (this.state.role === "professional")
      ComboBoxCatergory = (
        <ComboBoxGeneric
          ref={this.categoryInput}
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
