import decode from "jwt-decode";

export const isAuthenticated = () => {
  try {
    const { jwt } = JSON.parse(
      window.localStorage.getItem("loggedProhogarUser")
    );
    return decode(jwt);
  } catch (error) {
    return false;
  }
};
