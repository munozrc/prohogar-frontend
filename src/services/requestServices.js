import axios from "axios";
import loadDataUser from "../utils/loadDataUser";
import { URL_SERVER } from "../settings";

export async function newService(props) {
  const { jwt } = loadDataUser();
  const { title, category, location, description } = props;
  const { data } = await axios.post(
    `${URL_SERVER}/services`,
    { title, category, location, description },
    { headers: { Authorization: `Bearer ${jwt}` } }
  );
  return data;
}

export async function getServices() {
  const { jwt } = loadDataUser();
  const { data } = await axios.get(`${URL_SERVER}/services`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export async function getRequests() {
  const { jwt } = loadDataUser();
  const { data } = await axios.get(`${URL_SERVER}/requests`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export async function answerRequestByPro({ service, id, value }) {
  const { jwt } = loadDataUser();
  const { data } = await axios.put(
    `${URL_SERVER}/requests`,
    { service, id, value },
    { headers: { Authorization: `Bearer ${jwt}` } }
  );
  return data;
}
