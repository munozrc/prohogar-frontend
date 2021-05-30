import styled from "styled-components";
import DefaultImage from "../assets/profile-image.jpg";

export default function Avatar(props) {
  const { photo = "", name = "", type = "", maxWH = "50px" } = props;
  return (
    <>
      <UserImageWrapper width={maxWH} height={maxWH}>
        <UserImage src={photo === "" ? DefaultImage : photo} />
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
  box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.brandPrimary};
`;

const UserImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.brandPrimary};
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
