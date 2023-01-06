import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 28px;
  gap: 20px;
  border-radius: 4px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.colors.grey10};
`;

export const Title = styled.h3`
  ${(props) => props.theme.typography.heading["heading-6-600"]};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px 5px;

  width: 100%;

  @media (min-width: 768px) {
    gap: 32px 14px;
  }
`;

export const Image = styled.img`
  width: 32%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.grey7};
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 100%;
    /* max-width: 108px; */
  }

  @media (min-width: 1024px) {
    width: 45%;
    /* max-width: 108px; */
  }

  @media (min-width: 1300px) {
    width: 32%;
    max-width: 108px;
  }
`;
