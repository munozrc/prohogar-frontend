import axios from "axios";
import loadDataUser from "../utils/loadDataUser";
import { URL_SERVER } from "../settings";

export default async function getServices() {
  const { jwt } = loadDataUser();
  const { data } = await axios.get(`${URL_SERVER}/services`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}
