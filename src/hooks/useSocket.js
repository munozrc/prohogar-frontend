import { useCallback, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import SocketContext from "../context/SocketContext";

export default function useSocket() {
  const { socket, setUsersActive } = useContext(SocketContext);

  useEffect(() => {
    const dataUser = JSON.parse(
      window.localStorage.getItem("loggedProhogarUser")
    );
    // get ID current user connect
    if (dataUser) socket.emit("userConnect", dataUser.id);
  }, [socket]);

  useEffect(() => {
    // get All users connect from Server
    socket.on("getUsersConnected", (users) => {
      setUsersActive(() => users);
    });

    return () => {
      socket.off("getUsersConnected", (users) => {
        setUsersActive(() => users);
      });
    };
  }, [socket, setUsersActive]);

  const logout = useCallback(() => {
    const dataUser = JSON.parse(
      window.localStorage.getItem("loggedProhogarUser")
    );
    if (dataUser) {
      // Clear data user and send Logout
      socket.emit("userDisconnect", dataUser.id);
      window.localStorage.removeItem("loggedProhogarUser");
    }
    return <Redirect to="/login" />;
  }, [socket]);

  return {
    logout,
  };
}
