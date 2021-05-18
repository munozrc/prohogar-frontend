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
  color: rgba(255, 255, 255, 0.4);
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
  border: 2px solid rgba(35, 39, 42, 0.7);
  border-radius: 4px;
  background: rgba(35, 39, 42, 0.3);
  outline: none;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px #5865f2;
  }
`;

export default Input;
