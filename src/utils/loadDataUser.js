export default function loadDataUser() {
  const dataUser = JSON.parse(
    window.localStorage.getItem("loggedProhogarUser")
  );
  return {
    jwt: dataUser.jwt,
    id: dataUser.id,
    role: dataUser.role,
    name: dataUser.name,
    category: dataUser.category,
    photo: dataUser.photo,
  };
}
