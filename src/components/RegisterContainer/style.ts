import styled from "styled-components";

export const RegisterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.grey8};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 16px 71px 16px;

  button {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 46px 0 97px 0;
  }
`;

export const RegisterDiv = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 44px 28px;

  width: 100%;

  @media (min-width: 768px) {
    max-width: 412px;
    padding: 44px 48px;
  }
`;

export const RegisterTitle = styled.h1`
  ${(props) => props.theme.typography.heading["heading-5-500"]}
`;

export const RegisterForm = styled.form`
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

export const RegisterFormLabel = styled.div`
  ${(props) => props.theme.typography.text["body-2-500"]}
`;

export const RegisterFormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 9px;

  div {
    min-width: calc(50% - 4.5px);
  }

  button {
    padding: 24px 0;
    width: 100%;
  }

  .inputCurl__input {
    color: ${(props) => props.theme.colors.grey3};
    border: 1.5px solid ${(props) => props.theme.colors.grey7};
  }
`;
