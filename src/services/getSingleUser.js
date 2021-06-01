import axios from "axios";
import loadDataUser from "../utils/loadDataUser";
import { URL_SERVER } from "../settings";

export default async function getSingleUser({ id }) {
  const { jwt } = loadDataUser();
  const { data } = await axios.get(`${URL_SERVER}/users/${id}`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}
