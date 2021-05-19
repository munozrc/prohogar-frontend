import { forwardRef, useState } from "react";
import styled from "styled-components";

const Input = forwardRef(({ name = "", label = "", ...props }, ref) => {
  const [value, setValue] = useState("");

  const inputWithLabel = () => (
    <div>
      <LabelElement htmlFor={name}>{label}</LabelElement>
      <InputElement
        name={name}
        ref={ref}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
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
});

export const LabelElement = styled.label`
  display: block;
  color: ${({ theme }) => theme.labelColor};
  font-size: 1.1em;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 6px;
`;

export const InputElement = styled.input`
  height: 2.4em;
  min-height: 2.4em;
  width: 100%;
  color: #fff;
  font-size: 1.2em;
  padding: 0.5em;
  border: 2px solid ${({ theme }) => theme.borderDarkColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.bgColor};
  outline: none;
  color: #fff;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.brandPrimary};
  }
`;

export default Input;
