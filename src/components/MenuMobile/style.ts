import styled from "styled-components";

export const MenuMobileContainer = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const MobileSeparator = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${(props) => props.theme.colors.grey6};
`;
