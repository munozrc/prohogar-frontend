import styled from "styled-components";
import DefaultImage from "../assets/profile-image.jpg";

export default function Avatar(props) {
  const {
    photo = "",
    name = "",
    type = "",
    maxWH = "50px",
    active = false,
  } = props;
  return (
    <>
      <UserImageWrapper width={maxWH} height={maxWH}>
        <UserImage src={photo === "" ? DefaultImage : photo} />
        {active && <Active />}
      </UserImageWrapper>
      <UserData>
        <UserName>{name}</UserName>
        <UserType>{type}</UserType>
      </UserData>
    </>
  );
}

const UserImageWrapper = styled.span`
  display: block;
  position: relative;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: 50%;
  background: ${({ theme }) => theme.brandPrimary};
  box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.bgContent};
`;

const UserImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 50%;
  object-fit: cover;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
`;

const UserName = styled.h3`
  color: ${({ theme }) => theme.bgWhite};
  font-weight: 600;
`;
const UserType = styled.p`
  color: ${({ theme }) => theme.lightColor};
  font-weight: 300;
`;

const Active = styled.span`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 12px;
  height: 12px;
  background: #a7ff83;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.bgContent};
`;
