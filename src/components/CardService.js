import styled from "styled-components";

export default function CardService(props) {
  const { title, description } = props;
  return (
    <WrapperElement>
      <HeaderCard>
        <IconCategory
          src={
            "https://s3.amazonaws.com/timbrit-produccion/icono_tapicero_thumb.png"
          }
        />
        <WrapperTextHeader>
          <TitleCard>{title}</TitleCard>
          <CategoryText>Tapicero</CategoryText>
        </WrapperTextHeader>
      </HeaderCard>
      <DescriptionArea>{description}</DescriptionArea>
    </WrapperElement>
  );
}

const WrapperElement = styled.div`
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
  margin-bottom: 10px;
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

const DescriptionArea = styled.p`
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.lightColor};
`;
