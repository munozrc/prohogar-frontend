import { useCallback, useContext, useState } from "react";
import { answerRequestByPro, getRequests } from "../services/requestServices";
import SocketContext from "../context/SocketContext";

export default function useProfessional() {
  const { socket } = useContext(SocketContext);
  const [requests, setRequests] = useState([]);
  const [state, setState] = useState({ isLoading: false, error: "" });

  const getAllRequests = useCallback(() => {
    getRequests().then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setRequests(() => response.data);
    });
  }, []);

  const answerRequest = useCallback(
    ({ service, id, value }) => {
      setState({ isLoading: true, error: "" });
      answerRequestByPro({ service, id, value })
        .then((response) => {
          if (response.message === "SUCCESSFUL_UPDATE_REQUEST") {
            setState({ isLoading: false, error: "" });
            console.log({ service: response.data });
            // Send event Emit to Server
            socket.emit("answerRequest", response.data);
          }
        })
        .catch(() => {
          setState({
            isLoading: false,
            error: "Error al responder solicitud.",
          });
        });
    },
    [socket]
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: "" }));
  }, []);

  return {
    socket,
    requests,
    isLoading: state.isLoading,
    messageError: state.error,
    getAllRequests,
    answerRequest,
    clearError,
  };
}
