import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  margin-bottom: 1.7em;
  height: 40px;
  border: none;
  font-size: 1em;
  font-weight: 300;
  padding-left: 0.8em;
  color: #fff;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  :focus {
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7);
    outline: none;
  }
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 300;
  line-height: 34px;
  font-size: 1.2em;
  color: #fff;
`;

const NormalInput = ({
  typeInput,
  name,
  value,
  placeHolder,
  handleChange,
  label,
}) => {
  return (
    <>
      {label !== "" ? (
        <>
          <Label htmlFor={name}>{label}</Label>
          <Input
            type={typeInput}
            name={name}
            value={value}
            placeholder={placeHolder}
            onChange={({ target }) => handleChange(target.value)}
          />{" "}
        </>
      ) : (
        <Input
          type={typeInput}
          name={name}
          value={value}
          placeholder={placeHolder}
          onChange={({ target }) => handleChange(target.value)}
        />
      )}
    </>
  );
};

export default NormalInput;