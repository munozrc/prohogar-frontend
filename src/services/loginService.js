import axios from "axios";

const URL_SERVER = "http://localhost:3001/api";

export default async function loginService({ email, password }) {
  const { data } = await axios.post(`${URL_SERVER}/login`, { email, password });
  return data;
}
