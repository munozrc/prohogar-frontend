import axios from "axios";

const baseUrl = "http://localhost:3001/api/register";

export default async function loginService(newUser) {
  const { data } = await axios.post(baseUrl, newUser);
  return data;
}
