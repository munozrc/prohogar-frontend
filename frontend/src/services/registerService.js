import axios from "axios";
import { URL_SERVER } from "../constants";

const baseUrl = `${URL_SERVER}/register`;

export default async function loginService(newUser) {
  const { data } = await axios.post(baseUrl, newUser);
  return data;
}
