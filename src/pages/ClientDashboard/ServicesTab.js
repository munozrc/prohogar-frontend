import { useEffect } from "react";

// Custom Hooks
import useClient from "../../hooks/useClient";

// Custom Components
import CardService from "../../components/CardService";
import { TabContainer, TabTitle } from "../../components/TabElement";

export default function ServicesTab() {
  const { services, getAllServices } = useClient();

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  return (
    <TabContainer>
      {/* <NewContent onClick={getAllServices}>Nuevos Servicios</NewContent> */}
      <TabTitle>Mis servicios</TabTitle>
      {services.map((service) => (
        <CardService
          key={service.id}
          title={service.title}
          description={service.description}
          location={service.location}
          category={service.category}
          offers={service.professionals}
          professional={service.professional}
        />
      ))}
    </TabContainer>
  );
}
