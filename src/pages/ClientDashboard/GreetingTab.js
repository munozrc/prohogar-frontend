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
  height: 100%;
  padding: 50px;

  @media (max-width: 800px) {
    padding: 15px;
  }
`;

const NameUser = styled.h3`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
const GreetingsDisplay = styled.h4`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 42px;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;
