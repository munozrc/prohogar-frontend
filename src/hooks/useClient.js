import { useCallback, useContext, useEffect, useState } from "react";
import {
  contractProfessional,
  deleteService,
  getServices,
  newService,
} from "../services/requestServices";
import SocketContext from "../context/SocketContext";
import { toast } from "react-toastify";

export default function useClient() {
  const { socket } = useContext(SocketContext);
  const [services, setServices] = useState([]);
  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [state, setState] = useState({ isLoading: false, error: "" });

  useEffect(() => {
    if (state.error !== "") {
      toast.error(state.error);
      setState((prev) => ({ ...prev, error: "" }));
    }
  }, [state.error]);

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

  const deleteServiceByClient = useCallback(
    (service) => {
      setIsDeleted(() => false);
      setState({ isLoading: true, error: "" });
      deleteService(service)
        .then((response) => {
          if (response.message === "DELETED_SERVICE") {
            setState({ isLoading: false, error: "" });
            setIsDeleted(() => true);

            // Send event Emit to Server
            socket.emit("deleteRequest", response.data);
          }
        })
        .catch(() => {
          setState({ isLoading: false, error: "Fallo al eliminar servicio" });
        });
    },
    [socket]
  );

  const contractWithPro = useCallback(
    ({ service, professional, value }) => {
      setIsCreated(() => false);
      setState({ isLoading: true, error: "" });
      contractProfessional({
        service,
        professional,
        value,
      })
        .then((response) => {
          if (response.message === "HIRED_PROFESSIONAL") {
            setState({ isLoading: false, error: "" });
            setIsCreated(() => true);
            // Send event Emit to Server
            socket.emit("contractProfessional", response.data);
          }
        })
        .catch(() => {
          setState({
            isLoading: false,
            error: "Fallo al contratar professional",
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
    services,
    isCreated,
    isDeleted,
    isLoading: state.isLoading,
    messageError: state.error,
    getAllServices,
    createNewService,
    contractWithPro,
    deleteServiceByClient,
    clearError,
  };
}
