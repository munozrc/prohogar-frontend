import socketio from "socket.io-client";
import { URL_SERVER } from "../settings";
import { createContext } from "react";

const socket = socketio.connect(URL_SERVER.replace("api", ""));
const SocketContext = createContext();

export function SocketContextProvider({ children }) {
  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketContext;
