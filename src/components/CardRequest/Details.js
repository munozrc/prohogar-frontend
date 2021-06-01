import styled from "styled-components";

// Assets
import DescriptionIcon from "../../assets/DescriptionIcon";
import LocationIcon from "../../assets/LocationIcon";
import UserIcon from "../../assets/UserIcon";

export default function Details(props) {
  const { title, location, description, professional } = props;
  return (
    <WrapperWithBorder>
      <ItemSimple>
        <ItemTitle>{title}</ItemTitle>
      </ItemSimple>
      <ItemSimple>
        <LocationIcon />
        <ItemText>{location}</ItemText>
      </ItemSimple>
      <ItemSimple>
        <UserIcon />
        <ItemText>
          {professional ? professional.id : "Profesional no contratado."}
        </ItemText>
      </ItemSimple>
      <ItemSimple>
        <DescriptionIcon />
        <ItemText>{description}</ItemText>
      </ItemSimple>
    </WrapperWithBorder>
  );
}

export const WrapperWithBorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  padding: 10px;
  color: ${({ theme }) => theme.labelColor};
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const ItemSimple = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

  & > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;

const ItemText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const ItemTitle = styled(ItemText)`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.lightColor};
`;
