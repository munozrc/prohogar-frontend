import { useCallback, useEffect, useState } from "react";

// Custom Hooks
import useProfessional from "../../hooks/useProfessional";
import useGlobalUsers from "../../hooks/useGlobalUsers";

// Custom Components
import {
  EmptyContent,
  EmptyImage,
  NewContent,
  TabContainer,
  TabTitle,
} from "../../components/TabElement";
import CardRequest from "../../components/CardRequest";

// Assets
import EmptySVG from "../../assets/emptyImage.svg";

export default function ContractsTab() {
  const [showBtnNewContent, setShowBtnNewContent] = useState(false);
  const { socket, requests, getAllRequests } = useProfessional();
  const requestWithContract = requests.filter((req) => req.state === 1);
  const usersOnline = useGlobalUsers();

  const handleNewContract = useCallback(
    (listUsersPro) => {
      const dataUser = JSON.parse(
        window.localStorage.getItem("loggedProhogarUser")
      );
      dataUser &&
        listUsersPro.find((id) => id === dataUser.id) &&
        setShowBtnNewContent(() => true);
    },
    [setShowBtnNewContent]
  );

  useEffect(() => {
    getAllRequests();
  }, [getAllRequests]);

  useEffect(() => {
    socket.on("newContractByClient", handleNewContract);
    return () => {
      socket.off("newContractByClient", handleNewContract);
    };
  }, [socket, handleNewContract]);

  return (
    <TabContainer>
      {showBtnNewContent && (
        <NewContent
          onClick={() => {
            getAllRequests();
            setShowBtnNewContent(() => false);
          }}
        >
          Nuevos Contratos
        </NewContent>
      )}
      <TabTitle>Mis Contratos</TabTitle>
      {requestWithContract.map((request) => (
        <CardRequest
          key={request.id}
          id={request.id}
          title={request.title}
          description={request.description}
          location={request.location}
          professional={request.professional}
          client={request.client}
          usersOnline={usersOnline}
          isCardRequestContract={true}
        />
      ))}
      {requestWithContract.length === 0 && (
        <EmptyContent>
          <EmptyImage src={EmptySVG} />
          No tienes contratos.
        </EmptyContent>
      )}
    </TabContainer>
  );
}
