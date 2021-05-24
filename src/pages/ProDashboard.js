import styled from "styled-components";
import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";

// Assets
import OverviewIcon from "../assets/OverviewIcon";
import JobIcon from "../assets/JobIcon";

const links = [
  {
    path: "/dashboard",
    icon: OverviewIcon,
    text: "Información General",
  },
  {
    path: "/",
    icon: JobIcon,
    text: "Solicitudes",
  },
];

export default function ProDashboard() {
  const { name, photo, category } = loadDataUser();
  return (
    <PageDashboard photo={photo} name={name} type={category} links={links}>
      <GreetingsSection>
        <GreetingsName>{`Hola ${name},`}</GreetingsName>
        <GreetingsDisplay>Bienvenido de nuevo ✋</GreetingsDisplay>
      </GreetingsSection>
    </PageDashboard>
  );
}

const GreetingsSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 50px;
`;

const GreetingsName = styled.h3`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 24px;
  font-weight: 400;
`;
const GreetingsDisplay = styled.h4`
  color: ${({ theme }) => theme.bgWhite};
  font-size: 42px;
`;
