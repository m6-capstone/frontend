import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 28px;
  gap: 24px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.heading["heading-6-600"]}
`;

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Avatar = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.random9};
  border-radius: 15px;
  width: 30px;
  height: 30px;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.text["body-2-500"]}
`;

export const Date = styled.span`
  color: ${(props) => props.theme.colors.grey3};
`;

export const Comment = styled.p`
  color: ${(props) => props.theme.colors.grey2};
  ${(props) => props.theme.typography.text["body-2-400"]}
`;
