import { forwardRef, useState } from "react";
import styled from "styled-components";

const Input = forwardRef(
  ({ name = "", label = "", marginTop = "20px", ...props }, ref) => {
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

    return label !== "" ? inputWithLabel() : onlyInput();
  }
);

const LabelElement = styled.label`
  display: block;
  color: ${({ theme }) => theme.labelColor};
  font-size: 1.1em;
  font-weight: 400;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 6px;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const InputElement = styled.input`
  height: 2.4em;
  min-height: 2.4em;
  width: 100%;
  color: ${({ theme }) => theme.bgWhite};
  font-size: 1.2em;
  padding: 0.5em;
  border: 2px solid ${({ theme }) => theme.borderDarkColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.bgColor};
  outline: none;
  color: ${({ theme }) => theme.bgWhite};

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.brandPrimary};
  }
`;

export default Input;
