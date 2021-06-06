import { useCallback, useContext, useState } from "react";
import { getServices, newService } from "../services/requestServices";
import SocketContext from "../context/SocketContext";

export default function useClient() {
  const { socket } = useContext(SocketContext);
  const [services, setServices] = useState([]);
  const [isCreated, setIsCreated] = useState(false);
  const [state, setState] = useState({ isLoading: false, error: "" });

  const getAllServices = useCallback(() => {
    getServices().then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setServices(() => response.data);
    });
  }, []);

  const createNewService = useCallback(
    (data) => {
      const { title, category, location, description } = data;
      setIsCreated(() => false);
      setState({ isLoading: true, error: "" });
      if (title !== "" && location !== "" && description !== "") {
        newService({ title, category, location, description })
          .then((response) => {
            if (response.message === "SERVICE_CREATED") {
              setState({ isLoading: false, error: "" });
              setIsCreated(() => true);

              // Send event Emit to Server
              const listUsersPro = response.data.professionals.map(
                (pro) => pro.id
              );
              socket.emit("newServiceByClient", listUsersPro);
            }
          })
          .catch(() => {
            setState({ isLoading: false, error: "Fallo al crear servicio" });
          });
      } else {
        setState({ isLoading: false, error: "Existen campos vacíos" });
      }
    },
    [socket]
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: "" }));
  }, []);

  const connectUser = useCallback(() => {
    console.log("");
  }, []);

  return {
    usersActive: [],
    services,
    isCreated,
    isLoading: state.isLoading,
    messageError: state.error,
    getAllServices,
    createNewService,
    connectUser,
    clearError,
  };
}
