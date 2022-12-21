import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 0;
  align-items: center;
  gap: 60px;
  background-color: ${(props) => props.theme.colors.grey0};

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 59px;
    height: 140px;
  }
`;

export const Image = styled.img``;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.text["body-2-400"]}
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.grey1};
  color: ${(props) => props.theme.colors.white};
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px 5px 5px 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
