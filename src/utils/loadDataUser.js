export default function loadDataUser() {
  return JSON.parse(window.localStorage.getItem("loggedProhogarUser"));
}
