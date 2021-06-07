import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

// Custom Components
import Avatar from "../Avatar";
import Button from "../Button";

// Custom Styled Components
import { WrapperWithBorder } from "./Details";

// Assets
import ArrowIcon from "../../assets/ArrowIcon";

export default function Offers(props) {
  const { socket, offers, usersOnline, idService } = props;
  const [showOffers, setShowOffers] = useState(false);
  const [offersList, setOffersList] = useState(
    offers.filter((pro) => pro.acceptRequest === true)
  );

  const UpdateDataOffer = useCallback(
    (ServiceCurrent) => {
      if (ServiceCurrent.id === idService) {
        const newOffers = offers.map((offer, index) => {
          offer.acceptRequest =
            ServiceCurrent.professionals[index].acceptRequest;
          return offer;
        });
        setOffersList(() =>
          newOffers.filter((pro) => pro.acceptRequest === true)
        );
      }
    },
    [idService, offers]
  );

  useEffect(() => {
    socket.on("answerRequest", UpdateDataOffer);
    return () => socket.off("answerRequest", UpdateDataOffer);
  }, [UpdateDataOffer, socket]);

  return (
    <WrapperWithBorder>
      {offersList.length !== 0 ? (
        <Header>
          Ofertas <BadgeCounter>{offersList.length}</BadgeCounter>
          <OffersButton
            onClick={() => setShowOffers((prev) => !prev)}
            rotate={showOffers ? "rotate(90deg)" : ""}
          />
        </Header>
      ) : (
        <Header>Sin ofertas</Header>
      )}
      {showOffers && (
        <>
          {offersList.map((pro) => (
            <OffersUser key={pro.id}>
              <Avatar
                name={pro.name}
                photo={pro.photo}
                maxWH={"30px"}
                active={usersOnline.includes(pro.id)}
              />
              <Button
                variant={"subtn"}
                onClick={() => props.handleContract(pro.id, 1)}
              >
                Contratar
              </Button>
            </OffersUser>
          ))}
        </>
      )}
    </WrapperWithBorder>
  );
}

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.labelColor};

  &:last-child {
    margin-bottom: 0px;
  }
`;

const OffersButton = styled(ArrowIcon)`
  width: 22px;
  height: 22px;
  padding: 2px;
  color: ${({ theme }) => theme.bgWhite};
  font-size: 20px;
  margin-left: auto;
  border-radius: 50%;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.bgContent};
  }

  transform: ${(p) => p.rotate};
`;

const OffersUser = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.labelColor};
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  align-items: center;

  & h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.labelColor};
  }

  & div {
    margin-left: 10px;
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

const BadgeCounter = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  background: #f85959;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  transform: translateY(15%);
  color: ${({ theme }) => theme.bgWhite};
  margin-left: 6px;
`;
