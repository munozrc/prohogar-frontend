import { useCallback, useEffect } from "react";
import styled from "styled-components";

// Custom Components
import Button from "../Button";

// Local Custom Components
import Details from "./Details";
import Offers from "./Offers";

// Utils
import loadDataUser from "../../utils/loadDataUser";

// Assets
import MoreOptionsIcon from "../../assets/MoreOptionsIcon";
import useProfessional from "../../hooks/useProfessional";

export default function CardRequest(props) {
  const { title, description, location, offers, professional, client } = props;
  const { clientData, getDataClient } = useProfessional();
  const { name, id } = loadDataUser();

  useEffect(() => {
    getDataClient({ id: client });
  }, [client, getDataClient]);

  const RenderButtonOffer = useCallback(() => {
    const proFind = offers.find((pro) => pro.id === id && pro.acceptRequest);
    if (!proFind || offers.length === 0)
      return <Button>Realizar una oferta.</Button>;
    return null;
  }, [id, offers]);

  return (
    <>
      {clientData && professional === null && (
        <Wrapper>
          <Header>
            <UserImageWrapper>
              <UserImage src={clientData.photo} />
            </UserImageWrapper>
            <WrapperTextHeader>
              <TitleCard>{clientData.name}</TitleCard>
              <SubTitle>Cliente</SubTitle>
            </WrapperTextHeader>
            <OptionsButton />
          </Header>
          <Details
            title={title}
            location={location}
            description={description}
            professional={professional}
          />
          <Offers offers={offers} professionalName={name} />
          <RenderButtonOffer />
        </Wrapper>
      )}
    </>
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

const UserImageWrapper = styled.span`
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.brandPrimary};
`;

const UserImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.brandPrimary};
  border-radius: 50%;
  object-fit: cover;
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
