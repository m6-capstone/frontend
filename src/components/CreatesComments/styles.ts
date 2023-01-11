import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;

  position: relative;
  top: -50px;
  min-width: 350px;
  width: 93.5%;

  border-radius: 4px;

  background-color: ${(props) => props.theme.colors.grey10};

  @media (min-width: 768px) {
    position: unset;
    width: 100%;
  }
`;

export const CommentsHeader = styled.div`
  display: flex;
  gap: 10px;
`;

export const Initials = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.brand1};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.text["body-2-500"]}
  width: 32px;
  height: 32px;
  border-radius: 15px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.typography.text["body-2-500"]}
`;

export const CommentsContainer = styled.div`
  position: relative;
  border: 1.5px solid ${(props) => props.theme.colors.grey7};

  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    position: relative;
    bottom: 13px;
    right: 11px;
  }
`;

export const Comments = styled.textarea`
  border: none;
  border-radius: 4px;
  height: 128px;
  padding: 10px;
  resize: none;
  width: 100%;

  &::placeholder {
    ${(props) => props.theme.typography.text["textarea-placeholder"]};
  }
`;

export const RecomendationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 18px;
`;

export const Recomendation = styled.button`
  color: ${(props) => props.theme.colors.grey3};
  background: ${(props) => props.theme.colors.grey7};
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 5px 12px;
  gap: 10px;
  border-radius: 15px;

  &:focus {
    background: ${(props) => props.theme.colors.brand1};
    color: ${(props) => props.theme.colors.grey10};
  }
`;
