import { useCallback, useState } from "react";
import { getServices } from "../services/getServices";
import loadDataUser from "../utils/loadDataUser";

export default function useClient() {
  const [services, setServices] = useState([]);
  const { jwt } = loadDataUser();

  const getAllServices = useCallback(() => {
    getServices({ token: jwt }).then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setServices(() => response.data);
    });
  }, [jwt]);

  return {
    services,
    getAllServices,
  };
}
