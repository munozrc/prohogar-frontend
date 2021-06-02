import { forwardRef, useState } from "react";
import styled from "styled-components";

const Input = forwardRef(
  (
    { name = "", label = "", marginTop = "20px", type = "input", ...props },
    ref
  ) => {
    const [value, setValue] = useState("");

    const inputWithLabel = () => (
      <Container>
        <LabelElement htmlFor={name} marginTop={marginTop}>
          {label}
        </LabelElement>
        <InputElement
          name={name}
          ref={ref}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </Container>
    );

    const onlyInput = () => (
      <InputElement
        name={name}
        ref={ref}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    );

    const textAreaInput = () => (
      <Container>
        <LabelElement htmlFor={name} marginTop={marginTop}>
          {label}
        </LabelElement>
        <TextArea
          name={name}
          ref={ref}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </Container>
    );

    return type !== "area"
      ? label !== ""
        ? inputWithLabel()
        : onlyInput()
      : textAreaInput();
  }
);

const LabelElement = styled.label`
  display: inline-block;
  color: ${({ theme }) => theme.labelColor};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const InputElement = styled.input`
  height: 40px;
  width: 100%;
  min-height: 40px;
  font-size: 16px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.borderDarkColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textNormal};
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.brandPrimary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.borderDarkColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textNormal};
  outline: none;
  resize: none;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.brandPrimary};
  }
`;

export default Input;
