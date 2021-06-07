import { useEffect } from "react";

// Custom Hooks
import useClient from "../../hooks/useClient";

// Custom Components
import CardService from "../../components/CardService";
import {
  EmptyContent,
  EmptyImage,
  TabContainer,
  TabTitle,
} from "../../components/TabElement";

// Assets
import EmptySVG from "../../assets/emptyImage.svg";

export default function ContractsTab() {
  const { services, getAllServices } = useClient();
  const contractServices = services.filter((service) => service.state === 1);

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  return (
    <TabContainer>
      <TabTitle>Mis Contratos</TabTitle>
      {contractServices.map((service) => (
        <CardService
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          location={service.location}
          category={service.category}
          professional={service.professionals.find(
            (pro) => pro.id === service.professional
          )}
          isCardContract={true}
        />
      ))}
      {contractServices.length === 0 && (
        <EmptyContent>
          <EmptyImage src={EmptySVG} />
          No tienes ningún contrato.
        </EmptyContent>
      )}
    </TabContainer>
  );
}
