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

    return (
      <Container>
        <LabelElement htmlFor={name} marginTop={marginTop}>
          {label}
        </LabelElement>
        <SelectElement
          name={name}
          value={selectedValue}
          ref={ref}
          onChange={({ target }) => setSelectedValue(target.value)}
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
  display: inline-block;
  color: ${({ theme }) => theme.labelColor};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
`;

const SelectElement = styled.select`
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

const OptionElement = styled.option`
  background: rgba(35, 39, 42, 1);
`;

export default ComboBox;
