import { useCallback, useContext, useEffect, useState } from "react";
import SocketContext from "../context/SocketContext";

export default function useGlobalUsers() {
  const { socket } = useContext(SocketContext);
  const [usersOnline, setUsersOnline] = useState([]);

  const updateListUserOnline = useCallback((users) => {
    setUsersOnline(() => users);
  }, []);

  useEffect(() => {
    // get All users connect from Server
    socket.emit("getUsersOnline", updateListUserOnline);
    socket.on("getUsersOnline", updateListUserOnline);

    // Listen new user connect
    socket.on("newUserOnline", updateListUserOnline);

    return () => {
      socket.off("newUserOnline", updateListUserOnline);
      socket.off("getUsersOnline", updateListUserOnline);
    };
  }, [socket, updateListUserOnline]);

  return usersOnline;
}
