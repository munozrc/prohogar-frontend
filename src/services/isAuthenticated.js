import decode from "jwt-decode";

export const isAuthenticated = () => {
  try {
    const dataUser = JSON.parse(window.localStorage.getItem("USER_DATA"));
    return decode(dataUser.data.jwt);
  } catch (error) {
    return false;
  }
};
