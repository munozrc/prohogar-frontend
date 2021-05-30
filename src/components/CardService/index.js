import styled from "styled-components";
import { CategoryIcons } from "../../settings";

// Custom Components
import Details from "./Details";
import Offers from "./Offers";

// Assets
import MoreOptionsIcon from "../../assets/MoreOptionsIcon";

export default function CardService(props) {
  const { title, description, location, category, offers, professional } =
    props;
  return (
    <Wrapper>
      <Header>
        <IconCard src={CategoryIcons[category]} />
        <WrapperTextHeader>
          <TitleCard>{title}</TitleCard>
          <SubTitle>{category}</SubTitle>
        </WrapperTextHeader>
        <OptionsButton />
      </Header>
      <Details
        location={location}
        description={description}
        professional={professional}
      />
      <Offers offers={offers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  padding: 20px;
  margin-bottom: 15px;

  @media (max-width: 360px) {
    padding: 10px;
  }
`;

const IconCard = styled.img`
  max-width: 50px;
  max-height: 50px;
  min-width: 50px;
  min-height: 50px;
  padding: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgWhite};
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

const WrapperTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.labelColor};
`;

const TitleCard = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.bgWhite};
  overflow: hidden;
`;

const OptionsButton = styled(MoreOptionsIcon)`
  width: 30px;
  height: 30px;
  padding: 5px;
  color: ${({ theme }) => theme.bgWhite};
  font-size: 20px;
  margin-left: auto;
  border-radius: 50%;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.bgContent};
  }
`;
