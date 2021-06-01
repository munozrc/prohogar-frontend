import styled from "styled-components";
import loadDataUser from "../../utils/loadDataUser";

export default function GreetingTab() {
  const { name } = loadDataUser();
  return (
    <SectionElement>
      <Title>
        Hola <NameUser>{name}</NameUser>
      </Title>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  height: fit-content;
  padding: 50px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.lightColor};
  font-size: 28px;
  font-weight: 300;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const NameUser = styled.span`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
