import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  position: relative;
  width: 90%;
  max-width: 1280px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Hero = styled.div`
  position: relative;
  width: 90%;
  max-width: 1280px;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const ContainerHero = styled.div`
  width: 50%;
`;

export const WaveUpHome = styled.img`
  width: 90%;
  max-width: 1200px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const LogoIcon = styled.img`
  width: 280px;
  float: left;
`;

export const TitleHero = styled.h2`
  font-weight: bold;
  font-size: 2.4em;
`;

export const ContentHero = styled.p`
  width: 97%;
  font-weight: 300;
  font-size: 1.2em;
  margin-top: 10px;
  text-align: left;
`;

export const ImageHero = styled.img`
  width: 50%;
  transform: translateX(7%);
`;
