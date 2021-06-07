import styled from "styled-components";
import { CategoryIcons } from "../../settings";

// Custom Components
import Details from "./Details";
import Offers from "./Offers";
import MoreOptions from "./MoreOptions";

// Custom Hooks
import useClient from "../../hooks/useClient";
import { useCallback } from "react";

// Assets
import OkIcon from "../../assets/OkIcon";

export default function CardService(props) {
  const { isCardContract = false } = props;
  const { socket, contractWithPro, isLoading, isCreated } = useClient();

  const handleContract = useCallback(
    (professional, value) => {
      if (!isLoading)
        contractWithPro({ service: props.id, professional, value });
    },
    [contractWithPro, props.id, isLoading]
  );

  return (
    <Wrapper>
      {!isCreated ? (
        <>
          <Header>
            <IconCard src={CategoryIcons[props.category]} />
            <WrapperTextHeader>
              <TitleCard>{props.title}</TitleCard>
              <SubTitle>{props.category}</SubTitle>
            </WrapperTextHeader>
            <MoreOptions />
          </Header>
          <Details
            location={props.location}
            description={props.description}
            professional={props.professional}
          />
          {!isCardContract && (
            <Offers
              socket={socket}
              offers={props.offers}
              usersOnline={props.usersOnline}
              idService={props.id}
              handleContract={handleContract}
            />
          )}
        </>
      ) : (
        <ContractWrapper>
          <OkIcon />
          Profesional contratado.
        </ContractWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
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
  position: relative;
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

const ContractWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.bgWhite};

  & > svg {
    font-size: 25px;
    margin-right: 10px;
  }

  & circle {
    min-width: 25px;
  }
`;
