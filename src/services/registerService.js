import axios from "axios";

const URL_SERVER =
  process.env.REACT_APP_URL_API | "https://prohogar-backend.herokuapp.com/";

console.log(URL_SERVER);

export default async function loginService(newUser) {
  const { data } = await axios.post(`${URL_SERVER}/register`, newUser);
  return data;
}
