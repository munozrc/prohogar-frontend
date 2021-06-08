import { forwardRef, useState } from "react";
import styled from "styled-components";

// Custom Components
import { Container, InputElement, LabelElement } from "./Input";

// Assets
import NoVisibleIcon from "../assets/NoVisibleIcon";
import VisibleIcon from "../assets/VisibleIcon";

const PasswordInput = forwardRef((props, ref) => {
  const [values, setValues] = useState({ password: "", showPassword: false });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container>
      <LabelElement
        htmlFor={props.name}
        marginTop={props.marginTop ? props.marginTop : "20px"}
      >
        {props.label}
      </LabelElement>
      <WrapperInput>
        <InputElement
          type={values.showPassword ? "text" : "password"}
          name={props.name}
          ref={ref}
          value={values.password}
          onChange={handlePasswordChange("password")}
        />
        {values.password !== "" && (
          <IconButton onClick={handleClickShowPassword}>
            {values.showPassword ? <NoVisibleIcon /> : <VisibleIcon />}
          </IconButton>
        )}
      </WrapperInput>
    </Container>
  );
});

const WrapperInput = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const IconButton = styled.span`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  user-select: none;

  & svg {
    font-size: 24px;
    color: ${({ theme }) => theme.labelColor};
  }
`;

export default PasswordInput;
