import useClient from "../hooks/useClient";
import GreetingsSection from "../layouts/GreetingsSection";
import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";
import { LINK_CLIENT } from "../settings";
import { Redirect, Route, Switch } from "react-router";
import { useEffect } from "react";
import CardService from "../components/CardService";
import styled from "styled-components";

export default function ClientDashboard() {
  const { name, photo } = loadDataUser();
  const { services, getAllServices } = useClient();

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  return (
    <PageDashboard
      photo={photo}
      name={name}
      type={"Cliente"}
      links={LINK_CLIENT}
    >
      <Switch>
        <Route exact path={LINK_CLIENT[0].path}>
          <GreetingsSection name={name} />
        </Route>
        <Route exact path={LINK_CLIENT[1].path}>
          <ServicesTab>
            <TitleTab>Mis servicios</TitleTab>
            {services.map((service) => (
              <CardService
                key={service.id}
                title={service.title}
                description={service.description}
                location={service.location}
                category={service.category}
                offers={service.professionals}
                professional={service.professional}
              />
            ))}
          </ServicesTab>
        </Route>
        <Route render={() => <Redirect to={"/dashboard"} />} />
      </Switch>
    </PageDashboard>
  );
}

const ServicesTab = styled.div`
  width: 100%;
  padding: 20px;

  @media (max-width: 360px) {
    padding: 10px;
  }
`;

const TitleTab = styled.h2`
  color: ${({ theme }) => theme.lightColor};
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 3px;
  border-bottom: solid 1.5px ${({ theme }) => theme.lightColor};

  @media (max-width: 360px) {
    margin-bottom: 15px;
  }
`;
