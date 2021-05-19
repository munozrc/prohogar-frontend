import { useRef, useState } from "react";
import styled from "styled-components";
import imageDefault from "../assets/profile-image.jpg";
import Input from "./Input";

export default function PhotoPreview({ title }) {
  const UrlInput = useRef(null);
  const [value, setValue] = useState("");

  const handlePaste = (newUrl) => {
    newUrl !== "" && setValue(newUrl.getData("Text"));
  };

  const handleError = () => {
    setValue("");
  };

  return (
    <Wrapper>
      <ImgElement
        src={value === "" ? imageDefault : value}
        onError={handleError}
      />
      <Title>{`Registro de ${title}`}</Title>
      <Input
        name={"image-user"}
        type={"url"}
        label={`Imagen de ${title}`}
        ref={UrlInput}
        marginTop={"10px"}
        placeholder={"https://example.com/image"}
        onPaste={({ clipboardData }) => handlePaste(clipboardData)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 310.11px;
  height: fit-content;
  max-height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgElement = styled.img`
  max-width: 30%;
  border-radius: 50%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.8em;
  font-weight: 400;
  color: ${({ theme }) => theme.lightColor};
  margin: 10px 0px;
`;
