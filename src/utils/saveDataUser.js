export default function saveDataUser(response) {
  window.localStorage.setItem(
    "loggedProhogarUser",
    JSON.stringify({
      jwt: response.data.jwt,
      role: response.data.user.role,
      name: response.data.user.name,
      category: response.data.user.category,
      photo: response.data.user.photo,
    })
  );
}
