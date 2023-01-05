import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 665px;
  background-color: ${(props) => props.theme.colors.grey8};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 16px 71px 16px;

  button {
    text-align: center;
  }

  @media (min-width: 768px) {
    height: 786px;
    padding: 122px;
  }
`;

export const LoginDiv = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 44px 28px;

  width: 100%;

  @media (min-width: 768px) {
    max-width: 412px;
    padding: 44px 48px;
  }
`;

export const LoginTitle = styled.h1`
  ${(props) => props.theme.typography.heading["heading-5-500"]}
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  div {
    min-width: 100%;
  }

  .inputCurl__input {
    color: ${(props) => props.theme.colors.grey3};
    border: 1.5px solid ${(props) => props.theme.colors.grey7};
  }
`;

export const LoginPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const LoginForgotPassword = styled.h3`
  ${(props) => props.theme.typography.text["body-2-500"]}
  display: flex;
  justify-content: flex-end;
`;

export const LoginDontHaveAccount = styled.h3`
  ${(props) => props.theme.typography.text["body-2-400"]}
  text-align: center;
`;
