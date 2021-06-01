import styled from "styled-components";
import ServiceForm from "../../components/ServiceForm";
import loadDataUser from "../../utils/loadDataUser";

export default function GreetingTab() {
  const { name } = loadDataUser();
  return (
    <SectionElement>
      <NameUser>{`Hola ${name}`}</NameUser>
      <GreetingsDisplay>Bienvenido de nuevo 👋</GreetingsDisplay>
      <ServiceForm />
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  height: fit-content;
  padding: 50px;
`;

const NameUser = styled.h3`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 24px;
  font-weight: 400;
`;
const GreetingsDisplay = styled.h4`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 42px;
`;
