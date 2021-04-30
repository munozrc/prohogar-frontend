import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: ${({ width }) => (width ? width : "600px")};
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

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0px 10px 0px;
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

export const WaveUpCards = styled.img`
  width: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 56%;
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

export const TitleSecondary = styled.h3`
  font-weight: bold;
  font-size: 2em;
  margin-top: 30px;
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

export const CardSection = styled.div`
  width: 280px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.2);
  margin: 30px;
`;
