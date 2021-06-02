import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

export default function EntryData({ category = "", changeStep }) {
  const handleBack = () => {
    changeStep({ step: "select-category", value: null });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Title>¿Que necesitas de un {category}?</Title>
      <Input label="Titulo del servicio" marginTop="12px" type="text" />
      <Input label="Ubicacion" marginTop="12px" type="text" />
      <Input label="Descripción" type="area" marginTop="12px" />
      <WrapperButtons>
        <Button type="submit">Crear</Button>
        <Button type="button" variant="outline" onClick={handleBack}>
          Atrás
        </Button>
      </WrapperButtons>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 400px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.labelColor};
  margin: 10px 0px;
`;

const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: center;

  & > button:first-child {
    margin-right: 20px;
    width: 70%;
  }
`;
