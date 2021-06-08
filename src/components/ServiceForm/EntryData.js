import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import useClient from "../../hooks/useClient";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { CategoryStatement } from "../../settings";

export default function EntryData({ category = "", changeStep }) {
  const { isCreated, isLoading, messageError, clearError, createNewService } =
    useClient();
  const TitleRef = useRef(null);
  const LocationRef = useRef(null);
  const DescriptionRef = useRef(null);

  useEffect(() => {
    if (messageError !== "") {
      toast.error(messageError);
      clearError();
    }
  }, [messageError, clearError]);

  const handleBack = () => {
    if (!isLoading) changeStep({ step: "select-category", value: null });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = TitleRef.current.value;
    const location = LocationRef.current.value;
    const description = DescriptionRef.current.value;

    if (!isLoading) {
      createNewService({
        title,
        location,
        description,
        category,
      });
    }
  };

  const FormCreateService = () => (
    <Container onSubmit={handleSubmit}>
      <Title>{CategoryStatement[category]}</Title>
      <Input
        label="Titulo del servicio"
        marginTop="12px"
        type="text"
        ref={TitleRef}
      />
      <Input label="Ubicacion" marginTop="12px" type="text" ref={LocationRef} />
      <Input
        label="Descripción"
        isArea={true}
        marginTop="12px"
        ref={DescriptionRef}
      />
      <WrapperButtons>
        <Button type="submit">{isLoading ? "Creando..." : "Crear"}</Button>
        <Button type="button" variant="outline" onClick={handleBack}>
          Atrás
        </Button>
      </WrapperButtons>
    </Container>
  );

  const RenderMessageConfirmation = () => (
    <Container>
      <Title>Servicio Creado</Title>
      <Button type="button" onClick={handleBack}>
        Entendido
      </Button>
    </Container>
  );

  return (
    <>{isCreated ? <RenderMessageConfirmation /> : <FormCreateService />}</>
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
