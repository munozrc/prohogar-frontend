import { useCallback, useState } from "react";
import { useHistory } from "react-router";

// Services
import loginService from "../services/loginService";
import registerService from "../services/registerService";

// Utils
import { checkDefaultImage } from "../components/PhotoPreview";

export default function useUser() {
  const [state, setState] = useState({ isLoading: false, error: "" });
  const [showWelcome, setShowWelcome] = useState(false);
  const history = useHistory();

  const saveDataUser = useCallback((response) => {
    window.localStorage.setItem(
      "loggedProhogarUser",
      JSON.stringify({
        jwt: response.data.jwt,
        id: response.data.user.id,
        role: response.data.user.role,
        name: response.data.user.name.replace(/\b\w/g, (l) => l.toUpperCase()),
        category: response.data.user.category,
        photo: response.data.user.photo,
      })
    );
  }, []);

  const login = useCallback(
    ({ email, password }) => {
      setState({ isLoading: true, error: "" });
      if (email !== "" && password !== "") {
        loginService({
          email,
          password,
        })
          .then((response) => {
            if (response.message === "LOGIN_SUCCESSFUL") {
              saveDataUser(response);
              setState({ isLoading: false, error: "" });
              history.push("/dashboard");
            }
          })
          .catch(() => {
            setState({ isLoading: false, error: "Email o password invalidos" });
          });
      } else {
        setState({ isLoading: false, error: "Campos vacíos." });
      }
    },
    [history, saveDataUser]
  );

  const register = useCallback(
    ({ name, email, password, checkbox, type, category, photo }) => {
      setState({ isLoading: true, error: "" });
      if (name !== "" && email !== "" && password !== "") {
        if (checkbox) {
          if (
            type === "client" ||
            (category !== "default" && type === "professional")
          ) {
            const newPhoto = checkDefaultImage(photo);
            const newCategory = category === "" ? undefined : category;
            registerService({
              name,
              email,
              password,
              photo: newPhoto,
              role: type,
              category: newCategory,
            })
              .then((response) => {
                if (response.message === "SUCCESSFULLY_REGISTERED") {
                  saveDataUser(response);
                  setState({ isLoading: false, error: "" });
                  setShowWelcome(true);
                }
              })
              .catch(() => {
                setState({
                  isLoading: false,
                  error: "El email ya esta registrado",
                });
              });
          } else {
            setState({ isLoading: false, error: "Seleccione una Categoria" });
          }
        } else {
          setState({
            isLoading: false,
            error:
              "Para continuar debe aceptar las Condiciones del Servicio y la Política de Privacidad de Prohogar.",
          });
        }
      } else {
        setState({ isLoading: false, error: "Campos vacíos." });
      }
    },
    [saveDataUser]
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: "" }));
  }, []);

  return {
    login,
    register,
    clearError,
    isLoading: state.isLoading,
    messageError: state.error,
    showWelcome,
  };
}
