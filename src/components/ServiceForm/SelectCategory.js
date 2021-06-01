import { useEffect, useState } from "react";
import styled from "styled-components";

// Services and settings
import { getCategories } from "../../services/getCategories";
import { CategoryIcons } from "../../settings";

export default function SelectCategory() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(() => response.data);
    });
  }, []);

  return (
    <Container>
      <Title>¿Qué necesitas?</Title>
      <Center>
        {Object.keys(categories).map((category) => (
          <CategoryItem key={category + "-item"}>
            <CategoryImg src={CategoryIcons[category]} />
            Tapicero
          </CategoryItem>
        ))}
      </Center>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & > span {
    margin: 10px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.labelColor};
  margin: 10px 0px;
`;

const CategoryItem = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.labelColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin-bottom: 5px;
  }
`;

const CategoryImg = styled.img`
  max-width: 60px;
  max-height: 60px;
  min-width: 60px;
  min-height: 60px;
  padding: 5px;
  border-radius: 4px;
  background: ${({ theme }) => theme.bgWhite};
  overflow: hidden;
`;
