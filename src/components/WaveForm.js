import styled from "styled-components";
import WaveImg from "../assets/wave_001.png";
import WaveImg2 from "../assets/wave_002.png";

const WaveFormDown = styled.img`
  width: 98%;
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0em;
`;

const WaveFormUp = styled.img`
  width: 65%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;

const WaveForm = ({ up }) => {
  return up ? <WaveFormUp src={WaveImg2} /> : <WaveFormDown src={WaveImg} />;
};

export default WaveForm;
