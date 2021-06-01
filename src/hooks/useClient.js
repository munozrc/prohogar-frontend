import { useCallback, useState } from "react";
import getServices from "../services/getServices";

export default function useClient() {
  const [services, setServices] = useState([]);

  const getAllServices = useCallback(() => {
    getServices().then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setServices(() => response.data);
    });
  }, []);

  return {
    services,
    getAllServices,
  };
}
