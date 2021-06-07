import { useEffect } from "react";

// Custom Hooks
import useClient from "../../hooks/useClient";
import useGlobalUsers from "../../hooks/useGlobalUsers";

// Custom Components
import CardService from "../../components/CardService";
import { TabContainer, TabTitle } from "../../components/TabElement";

export default function ContractsTab() {
  const { services, getAllServices } = useClient();
  const usersOnline = useGlobalUsers();

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  return (
    <TabContainer>
      <TabTitle>Mis Contratos</TabTitle>
      {services.map((service) => (
        <CardService
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          location={service.location}
          category={service.category}
          offers={service.professionals}
          professional={service.professional}
          usersOnline={usersOnline}
        />
      ))}
    </TabContainer>
  );
}