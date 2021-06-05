import styled from "styled-components";
import { useHistory } from "react-router";
import Button from "./Button";
import OkIcon from "../assets/OkIcon";

export default function Welcome() {
  const history = useHistory();
  return (
    <CardElement>
      <OkIcon />
      <ContentText>
        Felicitaciones, su cuenta se ha creado con éxito.
      </ContentText>
      <Button onClick={() => history.push("/dashboard")}>Continuar</Button>
    </CardElement>
  );
}

const CardElement = styled.div`
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

  & > svg {
    font-size: 120px;
    align-self: center;
  }
`;

const ContentText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.lightColor};
  font-size: 18px;
  font-weight: 300;
  margin: 20px 0px;
`;
