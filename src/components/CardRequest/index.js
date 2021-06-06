import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

// Custom Components
import Button from "../Button";

// Local Custom Components
import Details from "./Details";
import Offers from "./Offers";

// Custom Hooks and Utils
import useProfessional from "../../hooks/useProfessional";
import loadDataUser from "../../utils/loadDataUser";

// Assets
import MoreOptionsIcon from "../../assets/MoreOptionsIcon";

export default function CardRequest(props) {
  const { title, description, location, professional, client, usersOnline } =
    props;
  const [offersService, setOffersService] = useState(props.offers);
  const { id } = loadDataUser();
  const { socket, answerRequest } = useProfessional();

  const handleAnswerRequest = useCallback(
    (value) => {
      answerRequest({ service: props.id, id, value });
      setOffersService((prev) =>
        prev.map((offer) => {
          if (offer.id === id) offer.acceptRequest = value;
          return offer;
        })
      );
    },
    [answerRequest, id, props.id]
  );

  const RenderButtonOffer = useCallback(() => {
    const proFind = offersService.find(
      (pro) => pro.id === id && pro.acceptRequest
    );
    if (!proFind || offersService.length === 0)
      return (
        <Button onClick={() => handleAnswerRequest(true)}>
          Realizar una oferta.
        </Button>
      );
    return null;
  }, [id, offersService, handleAnswerRequest]);

  const UpdateDataOffer = useCallback(
    (newOffers) => {
      if (newOffers.client === client.id)
        setOffersService((prev) =>
          prev.map((offer, index) => {
            offer.acceptRequest = newOffers[index].acceptRequest;
            return offer;
          })
        );
    },
    [client.id]
  );

  useEffect(() => {
    socket.on("answerRequest", (service) => {
      UpdateDataOffer(service.professionals);
    });

    return () => {
      socket.off("answerRequest", (service) => {
        UpdateDataOffer(service.professionals);
      });
    };
  }, [UpdateDataOffer, socket]);

  return (
    <Wrapper>
      <Header>
        <UserImageWrapper>
          <UserImage src={client.photo} />
          {usersOnline.includes(client.id) && <Active />}
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
      <Offers
        offers={offersService}
        idProfessional={id}
        cancelOffer={handleAnswerRequest}
        usersOnline={usersOnline}
      />
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
  background: ${({ theme }) => theme.bgContent};
  padding: 3px;
`;

const UserImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 50%;
  object-fit: cover;
`;

const Active = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #a7ff83;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.bgContent};
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
