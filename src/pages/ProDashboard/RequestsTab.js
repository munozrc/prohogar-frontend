import { useEffect } from "react";

// Custom Hooks
import useProfessional from "../../hooks/useProfessional";
import useGlobalUsers from "../../hooks/useGlobalUsers";

// Custom Components
import { TabContainer, TabTitle } from "../../components/TabElement";
import CardRequest from "../../components/CardRequest";

export default function RequestsTab() {
  const { requests, getAllRequests } = useProfessional();
  const usersOnline = useGlobalUsers();

  useEffect(() => {
    getAllRequests();
  }, [getAllRequests]);

  return (
    <TabContainer>
      <TabTitle>Mis solicitudes</TabTitle>
      {requests.map((request) => (
        <CardRequest
          key={request.id}
          id={request.id}
          title={request.title}
          description={request.description}
          location={request.location}
          offers={request.professionals}
          professional={request.professional}
          client={request.client}
          usersOnline={usersOnline}
        />
      ))}
    </TabContainer>
  );
}
