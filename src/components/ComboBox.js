import { forwardRef, useState } from "react";
import styled from "styled-components";

const ComboBox = forwardRef(
  (
    {
      name = "",
      label = "",
      marginTop = "20px",
      options = [],
      initValue = "Seleccione",
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState("default");

    const handleChange = (newValue) => {
      setSelectedValue(newValue);
    };

    return (
      <Container>
        <LabelElement htmlFor={name} marginTop={marginTop}>
          {label}
        </LabelElement>
        <SelectElement
          name={name}
          value={selectedValue}
          ref={ref}
          onChange={({ target }) => handleChange(target.value)}
        >
          <OptionElement value={"default"}>{initValue}</OptionElement>
          {options.map((element) => (
            <OptionElement value={element} key={element}>
              {element}
            </OptionElement>
          ))}
        </SelectElement>
      </Container>
    );
  }
);

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const LabelElement = styled.label`
  display: block;
  color: ${({ theme }) => theme.labelColor};
  font-size: 1.1em;
  font-weight: 400;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 6px;
`;

const SelectElement = styled.select`
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
  color: ${({ theme }) => theme.bgWhite};

  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.brandPrimary};
  }
`;

const OptionElement = styled.option`
  background: rgba(35, 39, 42, 1);
`;

export default ComboBox;
