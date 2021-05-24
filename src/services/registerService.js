import axios from "axios";
import { URL_SERVER } from "../settings";

export default async function loginService(newUser) {
  const { data } = await axios.post(`${URL_SERVER}/register`, newUser);
  return data;
}
