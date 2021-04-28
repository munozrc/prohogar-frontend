import axios from "axios";
import { URL_SERVER } from "../constants";

export const loginService = async ({ email, password }) => {
  return axios
    .post(`${URL_SERVER}/login`, { email, password })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
