import axios from "axios";
import loadDataUser from "../utils/loadDataUser";
import { URL_SERVER } from "../settings";

export async function getRequests() {
  const { jwt } = loadDataUser();
  const { data } = await axios.get(`${URL_SERVER}/requests`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}
