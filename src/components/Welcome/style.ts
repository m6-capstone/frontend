import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 52px;
  background-color: ${(props) => props.theme.colors.brand2};
  height: 703px;

  @media (min-width: 768px) {
    gap: 46px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 52px;

  @media (min-width: 768px) {
    width: 748px;
    gap: 20px;
  }
`;
export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.heading["heading-3-600"]}
  width: 93.6%;

  @media (min-width: 768px) {
    width: 748px;
    ${(props) => props.theme.typography.heading["heading-1-700"]}
  }
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.text["body-1-400"]}
  width: 93.6%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  width: 93.6%;

  a {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 350px;
  }
`;
export const Button = styled.button`
  padding: 24px 28px;
  border-radius: 4px;
  width: 100%;
  background-color: transparent;
  border: 1.5px solid ${(props) => props.theme.colors.grey10};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.text["button-big-text"]}
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey10};
    color: ${(props) => props.theme.colors.grey0};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 24px 65px;
  }
`;
