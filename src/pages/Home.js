import styled from "styled-components";

// Custom Components
import PageWithCenter from "../layouts/PageWithCenter";
import Button from "../components/Button";

// Assets
import ComputerSVG from "../assets/app.svg";
import HouseSVG from "../assets/home-img.svg";

export default function Home() {
  return (
    <PageWithCenter>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            ¿Necesitas un profesional para hacer reparaciones en tu hogar?
          </HeroTitle>
          <HeroParagraph>
            Prohogar te permite crear solicitudes de servicio a profesionales
            adecuados según las necesidades de reparación que requiera tu hogar.
          </HeroParagraph>
          <Button>Crear Cuenta</Button>
        </HeroContent>
        <HeroImages>
          <HouseImg src={HouseSVG} />
          <ComputerImg src={ComputerSVG} />
        </HeroImages>
      </HeroContainer>
    </PageWithCenter>
  );
}

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 546px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.brandDark};
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 20px;
  z-index: 1;

  & > button {
    margin: 40px 0px 30px 0px;
  }
`;

const HeroTitle = styled.h1`
  max-width: 780px;
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.bgWhite};
  text-shadow: 1px 1px 5px ${({ theme }) => theme.borderDarkColor};

  @media (max-width: 720px) {
    font-size: 32px;
  }
`;

const HeroParagraph = styled.p`
  max-width: 640px;
  text-align: center;
  font-size: 20px;
  line-height: 1.625;
  margin-top: 40px;
  color: ${({ theme }) => theme.lightColor};
  text-shadow: 1px 1px 2px #222;

  @media (max-width: 720px) {
    margin-top: 30px;
    font-size: 16px;
  }
`;

const HeroImages = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  user-select: none;

  @media (max-width: 720px) {
    position: relative;
  }
`;

const HouseImg = styled.img`
  position: absolute;
  bottom: -5px;
  right: -320px;
  max-width: 790px;
  user-select: none;

  @media (max-width: 720px) {
    right: -50px;
    max-width: 480px;
  }
`;

const ComputerImg = styled.img`
  position: absolute;
  bottom: 0px;
  left: -540px;
  max-width: 80%;
  user-select: none;
  transform: scaleX(-1);

  @media (max-width: 720px) {
    position: relative;
    max-width: 400px;
    left: -300%;
  }
`;
