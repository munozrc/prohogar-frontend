import axios from "axios";

const URL_SERVER = "http://localhost:3001/api";

export const loginService = async ({ email, password }) => {
  return axios
    .post(`${URL_SERVER}/login`, { email, password })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
