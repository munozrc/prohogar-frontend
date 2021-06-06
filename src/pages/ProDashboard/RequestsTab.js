import { useCallback, useEffect, useState } from "react";

// Custom Hooks
import useProfessional from "../../hooks/useProfessional";
import useGlobalUsers from "../../hooks/useGlobalUsers";

// Custom Components
import {
  NewContent,
  TabContainer,
  TabTitle,
} from "../../components/TabElement";
import CardRequest from "../../components/CardRequest";

export default function RequestsTab() {
  const [showBtnNewContent, setShowBtnNewContent] = useState(false);
  const { socket, requests, getAllRequests } = useProfessional();
  const usersOnline = useGlobalUsers();

  const handleNewServicesUpdate = useCallback(
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
    socket.on("newServiceByClient", handleNewServicesUpdate);
    return () => {
      socket.off("newServiceByClient", handleNewServicesUpdate);
    };
  }, [socket, handleNewServicesUpdate]);

  return (
    <TabContainer>
      {showBtnNewContent && (
        <NewContent
          onClick={() => {
            getAllRequests();
            setShowBtnNewContent(() => false);
          }}
        >
          Nuevas Solicitudes
        </NewContent>
      )}
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
