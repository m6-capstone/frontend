import styled from "styled-components";

interface IInfoConteiner {
  props: {
    isDesktop: boolean;
  };
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 44px;
  background-color: ${(props) => props.theme.colors.grey10};
  border-radius: 4px;
`;
export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.heading["heading-6-600"]};
  margin-bottom: 41px;
`;
export const Price = styled.p`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.heading["heading-7-500"]};
`;

export const InfoConteiner = styled.div<IInfoConteiner>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
  ${(p) =>
    p.props.isDesktop ? "" : { gap: "32px", "flex-direction": "column" }}
`;

export const InfoConteinerYearMileage = styled.div`
  display: flex;
  gap: 12px;
`;

export const Info = styled.span`
  height: 32px;
  box-sizing: border-box;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colors.brand4};
  color: ${(props) => props.theme.colors.brand1};
  ${(props) => props.theme.typography.text["body-2-500"]}
`;
