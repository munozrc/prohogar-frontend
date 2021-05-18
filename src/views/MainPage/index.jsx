import React from "react";
import ButtonGeneric from "../../components/common/ButtonGeneric";
import { LOGIN_ROUTE, SELECT_ACCOUNT_ROUTE } from "../../constants";
import {
  ContainerButtons,
  LogoIcon,
  Row,
  Section,
  TitleHero,
  WaveUpHome,
  WaveUpCards,
  Hero,
  ContentHero,
  ContainerHero,
  ImageHero,
  TitleSecondary,
  ContainerCards,
  CardSection,
} from "./styles";

// Assets
import LogoSVG from "../../assets/logo.svg";
import HeroSVG from "../../assets/img-home.svg";
import Wave003 from "../../assets/wave_003.svg";
import Wave004 from "../../assets/wave_004.svg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.showLoginPage = this.showLoginPage.bind(this);
    this.showSelectAccountPage = this.showSelectAccountPage.bind(this);
  }

  showLoginPage() {
    this.props.history.push(LOGIN_ROUTE);
  }

  showSelectAccountPage() {
    this.props.history.push(SELECT_ACCOUNT_ROUTE);
  }

  render() {
    return (
      <>
        <Section>
          <Row>
            <LogoIcon src={LogoSVG} />
            <ContainerButtons>
              <ButtonGeneric
                typeButton={"buttom"}
                onClick={this.showLoginPage}
                value={"Iniciar Sesión"}
              />
              <ButtonGeneric
                typeButton={"buttom"}
                onClick={this.showSelectAccountPage}
                value={"Crear Cuenta"}
              />
            </ContainerButtons>
          </Row>
          <Hero>
            <ContainerHero>
              <TitleHero>
                ¿Necesitas un profesional para hacer reparaciones en tu hogar?
              </TitleHero>
              <ContentHero>
                Prohogar te permite crear solicitudes de servicio a
                profesionales adecuados según las necesidades de reparación que
                requiera tu hogar.
              </ContentHero>
            </ContainerHero>
            <ImageHero src={HeroSVG} />
          </Hero>
          <WaveUpHome src={Wave003} />
        </Section>
        <Section>
          <TitleSecondary>¿Por qué utilizar Prohogar?</TitleSecondary>
          <ContainerCards>
            <CardSection />
            <CardSection />
            <CardSection />
          </ContainerCards>
          <WaveUpCards src={Wave004} />
        </Section>
      </>
    );
  }
}

export default MainPage;