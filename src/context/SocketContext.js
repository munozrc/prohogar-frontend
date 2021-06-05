import socketio from "socket.io-client";
import { URL_SERVER } from "../settings";
import { createContext, useState } from "react";

const socket = socketio.connect(URL_SERVER.replace("api", ""));
const SocketContext = createContext();

export function SocketContextProvider({ children }) {
  const [usersActive, setUsersActive] = useState([]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        usersActive,
        setUsersActive,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketContext;
