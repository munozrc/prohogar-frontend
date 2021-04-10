import axios from "axios";
import { URL_SERVER } from "../constants";

const baseUrl = `${URL_SERVER}/login`;

export default async function loginService(credentials) {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
}
