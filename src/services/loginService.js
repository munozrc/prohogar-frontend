import axios from "axios";
import { URL_SERVER } from "../config";

export default async function loginService({ email, password }) {
  const { data } = await axios.post(`${URL_SERVER}/login`, { email, password });
  return data;
}
