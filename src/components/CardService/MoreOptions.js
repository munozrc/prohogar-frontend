import { useState } from "react";
import styled from "styled-components";

// Assets
import MoreOptionsIcon from "../../assets/MoreOptionsIcon";

export default function MoreOption() {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  return (
    <>
      <OptionsButton onClick={() => setShowMoreOptions((prev) => !prev)} />
      {showMoreOptions && (
        <ContainerBox onMouseLeave={() => setShowMoreOptions(() => false)}>
          <ItemOption>Editar</ItemOption>
          <ItemOption>Eliminar</ItemOption>
        </ContainerBox>
      )}
    </>
  );
}

const ContainerBox = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 150px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.brandDark};
  border-radius: 4px;
  z-index: 1;
`;

const ItemOption = styled.span`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.labelColor};
  transition: background 0.3s ease;
  cursor: pointer;
  padding: 0px 10px;

  &:hover {
    background: ${({ theme }) => theme.bgContent};
  }
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
