import { useEffect } from "react";

// Custom Components
import { TabContainer, TabTitle } from "../../layouts/TabElement";
import CardRequest from "../../components/CardRequest";

// Custom Hooks
import useProfessional from "../../hooks/useProfessional";

export default function RequestsTab() {
  const { requests, getAllRequests } = useProfessional();

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
        />
      ))}
    </TabContainer>
  );
}
