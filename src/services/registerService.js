import axios from "axios";

const URL_SERVER = "http://localhost:3001/api";

export default async function loginService(newUser) {
  const { data } = await axios.post(`${URL_SERVER}/register`, newUser);
  return data;
}
