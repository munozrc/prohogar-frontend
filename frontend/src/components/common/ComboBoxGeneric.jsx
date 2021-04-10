import React from "react";
import styled from "styled-components";

const Select = styled.select``;
const Option = styled.option``;
const Label = styled.label`
  font-style: normal;
  font-weight: 300;
  line-height: 34px;
  font-size: 1.2em;
  color: #fff;
`;

const ComboBoxGeneric = ({ label, name, options, placeHolder }) => {
  const [selectedValue, setSelectedValue] = React.useState("default");

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
  };
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        value={selectedValue}
        onChange={({ target }) => handleChange(target.value)}
      >
        <Option value={"default"}>{placeHolder}</Option>
        {options.map((element) => (
          <Option value={element.value} key={element.name}>
            {element.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default ComboBoxGeneric;
