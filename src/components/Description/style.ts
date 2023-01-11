import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: -50px;
  min-width: 350px;
  width: 93.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 28px;
  border-radius: 4px;

  gap: 32px;

  background-color: ${(props) => props.theme.colors.grey10};

  @media (min-width: 768px) {
    position: unset;
    width: 100%;
  }
`;
export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.heading["heading-6-600"]};
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.grey2};
  ${(props) => props.theme.typography.text["body-1-400"]};
`;
