import styled from "styled-components";
import DescriptionIcon from "../assets/DescriptionIcon";
import LocationIcon from "../assets/LocationIcon";
import MoreOptionsIcon from "../assets/MoreOptionsIcon";
import { CategoryIcons } from "../settings";

export default function CardService(props) {
  const { title, description, location, category } = props;
  return (
    <Card>
      <HeaderCard>
        <IconCategory src={CategoryIcons[category]} />
        <WrapperTextHeader>
          <TitleCard>{title}</TitleCard>
          <CategoryText>{category}</CategoryText>
        </WrapperTextHeader>
        <MoreOptions />
      </HeaderCard>
      <DetailOptions>
        <ItemOption>
          <LocationIcon />
          <ItemText>{location}</ItemText>
        </ItemOption>
        <ItemOption>
          <DescriptionIcon />
          <ItemText>{description}</ItemText>
        </ItemOption>
      </DetailOptions>
    </Card>
  );
}

const Card = styled.div`
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
    padding: 15px;
  }
`;

const IconCategory = styled.img`
  max-width: 50px;
  max-height: 50px;
  min-width: 50px;
  min-height: 50px;
  padding: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgWhite};
  overflow: hidden;
`;

const HeaderCard = styled.div`
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

const CategoryText = styled.span`
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

const DetailOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  padding: 10px;
  color: ${({ theme }) => theme.labelColor};
`;

const ItemText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const ItemOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

  & > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;

const MoreOptions = styled(MoreOptionsIcon)`
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
