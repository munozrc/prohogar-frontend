import React from "react";
import DefaultProfileImage from "../../assets/profile-image.jpg";

const ProfilePictureUploader = React.forwardRef((props, ref) => {
  const [urlPicture, setUrlPicture] = React.useState(DefaultProfileImage);
  const [inputValue, setInputValue] = React.useState("");

  const handleChangeValue = (value) => {
    setInputValue(value);
  };

  const handleChangeURL = () => {
    if (inputValue !== "") setUrlPicture(inputValue);
  };

  const handleError = () => {
    setUrlPicture(DefaultProfileImage);
    setInputValue("");
    alert("ProfileImage: URL no valida");
  };

  return (
    <div>
      <div>
        <img
          src={urlPicture}
          alt="profileImage"
          ref={ref}
          onError={handleError}
        />
      </div>
      <input
        type="url"
        value={inputValue}
        onChange={({ target }) => handleChangeValue(target.value)}
        placeholder={"https://example.com/image"}
        name="profileImage"
      />
      <button type="button" onClick={handleChangeURL}>
        Cargar Imagen
      </button>
    </div>
  );
});

export default ProfilePictureUploader;
