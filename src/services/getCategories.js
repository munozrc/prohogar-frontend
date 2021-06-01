import axios from "axios";
import loadDataUser from "../utils/loadDataUser";
import { URL_SERVER } from "../settings";

export async function getCategories() {
  const { jwt } = loadDataUser();
  const { data } = await axios.get(`${URL_SERVER}/categories`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}
