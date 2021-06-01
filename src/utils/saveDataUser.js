export default function saveDataUser(response) {
  window.localStorage.setItem(
    "loggedProhogarUser",
    JSON.stringify({
      jwt: response.data.jwt,
      id: response.data.user.id,
      role: response.data.user.role,
      name: response.data.user.name.replace(/\b\w/g, (l) => l.toUpperCase()),
      category: response.data.user.category,
      photo: response.data.user.photo,
    })
  );
}
