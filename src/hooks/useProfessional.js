import { useCallback, useState } from "react";
import { getRequests } from "../services/getRequests";

export default function useProfessional() {
  const [requests, setRequests] = useState([]);

  const getAllRequests = useCallback(() => {
    getRequests().then((response) => {
      if (response.message === "SUCCESSFUL_QUERY")
        setRequests(() => response.data);
    });
  }, []);

  return {
    requests,
    getAllRequests,
  };
}
