export const saveDataUser = (response) => {
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
};

export const loadDataUser = () => {
  const dataUser = JSON.parse(
    window.localStorage.getItem("loggedProhogarUser")
  );
  return {
    jwt: dataUser.jwt,
    role: dataUser.role,
    name: dataUser.name,
    category: dataUser.category,
    photo: dataUser.photo,
  };
};
