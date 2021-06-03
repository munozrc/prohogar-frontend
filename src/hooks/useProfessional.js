import { useCallback, useState } from "react";
import { answerRequestByPro, getRequests } from "../services/requestServices";

export default function useProfessional() {
  const [requests, setRequests] = useState([]);
  const [state, setState] = useState({ isLoading: false, error: "" });

  const getAllRequests = useCallback(() => {
    getRequests().then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setRequests(() => response.data);
    });
  }, []);

  const answerRequest = useCallback(({ service, id, value }) => {
    setState({ isLoading: true, error: "" });
    answerRequestByPro({ service, id, value })
      .then((response) => {
        if (response.message === "SUCCESSFUL_UPDATE_REQUEST")
          setState({ isLoading: false, error: "" });
      })
      .catch(() => {
        setState({ isLoading: false, error: "Error al responder solicitud." });
      });
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: "" }));
  }, []);

  return {
    requests,
    isLoading: state.isLoading,
    messageError: state.error,
    getAllRequests,
    answerRequest,
    clearError,
  };
}
