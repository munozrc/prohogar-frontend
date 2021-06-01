import { useCallback, useState } from "react";
import { getRequests } from "../services/getRequests";
import getSingleUser from "../services/getSingleUser";

export default function useProfessional() {
  const [requests, setRequests] = useState([]);
  const [clientData, setClientData] = useState(null);

  const getAllRequests = useCallback(() => {
    getRequests().then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setRequests(() => response.data);
    });
  }, []);

  const getDataClient = useCallback(({ id }) => {
    getSingleUser({ id }).then((response) => {
      if (response.message === "SUCCESSFUL_QUERY") {
        setClientData(() => response.data);
      }
    });
  }, []);

  return {
    requests,
    clientData,
    getAllRequests,
    getDataClient,
  };
}
