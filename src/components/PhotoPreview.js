import { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import imageDefault from "../assets/profile-image.jpg";
import Input from "./Input";

export function checkDefaultImage(currectSrc) {
  return currectSrc === imageDefault ? "" : currectSrc;
}

const PhotoPreview = forwardRef(({ title }, ref) => {
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
      <WrapperImg>
        <ImgElement
          src={value === "" ? imageDefault : value}
          onError={handleError}
          ref={ref}
        />
      </WrapperImg>
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
});

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
  height: 100%;
`;

const WrapperImg = styled.div`
  width: 25vh;
  max-width: 110px;
  height: 25vh;
  max-height: 110px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.8em;
  font-weight: 400;
  color: ${({ theme }) => theme.lightColor};
  margin: 10px 0px;
`;

export default PhotoPreview;
