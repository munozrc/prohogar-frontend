import { useContext } from "react";
import SocketContext from "../context/SocketContext";

export default function useGlobalUsers() {
  return useContext(SocketContext).usersActive;
}
