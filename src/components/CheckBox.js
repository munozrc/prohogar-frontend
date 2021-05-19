import styled from "styled-components";

export default function CheckBox() {
  return (
    <Container>
      <CheckElement type={"checkbox"} />
      <LabelElement>
        He leído y acepto las Condiciones del Servicio y la Política de
        Privacidad de Prohogar
      </LabelElement>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
`;

const CheckElement = styled.input`
  display: inline-flex;
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  margin-right: 10px;
  outline: none;
  background-color: ${({ theme }) => theme.brandPrimary};

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.brandPrimary};
  }
`;

const LabelElement = styled.label`
  font-size: 0.85em;
  color: ${({ theme }) => theme.labelColor};
`;
