import styled from "styled-components";
import { forwardRef, useRef, useState } from "react";

// Custom Components
import { TitleForm } from "../layouts/TitleForm";
import Input from "./Input";

// Assets
import imageDefault from "../assets/profile-image.jpg";

const PhotoPreview = forwardRef(({ title }, ref) => {
  const UrlInput = useRef(null);
  const [value, setValue] = useState("");

  const handlePaste = (newUrl) => {
    newUrl !== "" && setValue(newUrl.getData("text/plain"));
  };

  return (
    <Wrapper>
      <WrapperImg>
        <ImgElement
          src={value === "" ? imageDefault : value}
          onError={() => setValue("")}
          ref={ref}
        />
      </WrapperImg>
      <TitleForm>{`Registro de ${title}`}</TitleForm>
      <Input
        name={"image-user"}
        type={"url"}
        label={`Imagen de ${title} (opcional)`}
        ref={UrlInput}
        marginTop={"10px"}
        placeholder={"https://example.com/image"}
        onPaste={({ clipboardData }) => handlePaste(clipboardData)}
      />
    </Wrapper>
  );
});

export function checkDefaultImage(currectSrc) {
  return currectSrc === imageDefault ? "" : currectSrc;
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    margin: 10px 0px 15px 0px;
  }
`;

const ImgElement = styled.img`
  max-height: 100%;
`;

const WrapperImg = styled.div`
  width: 110px;
  height: 110px;
  min-width: 110px;
  min-height: 110px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.lightColor};
`;

export default PhotoPreview;
