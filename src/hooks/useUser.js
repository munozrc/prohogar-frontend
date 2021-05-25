import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import loginService from "../services/loginService";
import saveDataUser from "../utils/saveDataUser";

export default function useUser() {
  const [state, setState] = useState({ isLoading: false, error: "" });
  const history = useHistory();

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
    [history]
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: "" }));
  }, []);

  return {
    login,
    clearError,
    isLoading: state.isLoading,
    messageError: state.error,
  };
}
