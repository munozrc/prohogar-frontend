import axios from "axios";

const baseUrl = "http://localhost:3001/api/login";

export default async function loginService(credentials) {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
}
