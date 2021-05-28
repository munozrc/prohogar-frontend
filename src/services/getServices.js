import axios from "axios";
import { URL_SERVER } from "../settings";

export async function getServices({ token }) {
  const { data } = await axios.get(`${URL_SERVER}/services`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
