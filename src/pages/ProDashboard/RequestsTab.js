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
import NoRequestImage from "../../assets/noRequest.svg";

export default function RequestsTab() {
  const [showBtnNewContent, setShowBtnNewContent] = useState(false);
  const { socket, requests, getAllRequests } = useProfessional();
  const requestWithOutContract = requests.filter((req) => req.state === 0);
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
      {requestWithOutContract.map((request) => (
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
      {requestWithOutContract.length === 0 && (
        <EmptyContent>
          <EmptyImage
            src={NoRequestImage}
            style={{
              maxWidth: "20%",
              filter: "drop-shadow(0 0 1px #fff)",
            }}
          />
          No tienes solicitudes.
        </EmptyContent>
      )}
    </TabContainer>
  );
}
