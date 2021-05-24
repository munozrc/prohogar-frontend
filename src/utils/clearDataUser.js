import { Redirect } from "react-router";

export default function clearDataUser() {
  window.localStorage.removeItem("loggedProhogarUser");
  return <Redirect to="/" />;
}
