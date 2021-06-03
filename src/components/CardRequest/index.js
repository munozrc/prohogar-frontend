import { useCallback, useState } from "react";
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
  const { title, description, location, professional, client } = props;
  const [offersService, setOffersService] = useState(props.offers);
  const { name, id } = loadDataUser();
  const { answerRequest } = useProfessional();

  const handleAnswerRequest = useCallback(() => {
    answerRequest({ service: props.id, id });
    setOffersService((prev) =>
      prev.map((offer) => {
        if (offer.id === id) offer.acceptRequest = true;
        return offer;
      })
    );
  }, [answerRequest, id, props.id]);

  const RenderButtonOffer = useCallback(() => {
    const proFind = offersService.find(
      (pro) => pro.id === id && pro.acceptRequest
    );
    if (!proFind || offersService.length === 0)
      return (
        <Button onClick={handleAnswerRequest}>Realizar una oferta.</Button>
      );
    return null;
  }, [id, offersService, handleAnswerRequest]);

  return (
    <Wrapper>
      <Header>
        <UserImageWrapper>
          <UserImage src={client.photo} />
        </UserImageWrapper>
        <WrapperTextHeader>
          <TitleCard>{client.name}</TitleCard>
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
      <Offers offers={offersService} professionalName={name} />
      <RenderButtonOffer />
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

const UserImageWrapper = styled.span`
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.brandSecondary};
  padding: 3px;
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
