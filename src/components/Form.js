import styled, { css } from "styled-components";
import { fadeInLarge } from "../styles/Animations";

const FormElement = styled.form`
  position: relative;
  width: 100%;
  height: fit-content;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  padding: 30px;
  margin: 30px 0px;
  animation: ${fadeInLarge} 0.3s;

  ${({ register }) =>
    register &&
    css`
      & > button {
        margin: 5px 0px;
      }
    `}

  ${({ login }) =>
    login &&
    css`
      & > button {
        margin-top: 15px;
      }

      & > a {
        margin-top: 5px;
      }

      & > span {
        color: ${({ theme }) => theme.labelColor};
        font-size: 14px;
        margin-top: 5px;
      }
    `}
  
  @media (max-width: 520px) {
    margin: 100px 0px 30px 0px;
  }
`;

export default FormElement;
