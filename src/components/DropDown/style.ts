import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border: 5px solid green;

  background-color: ${(props) => props.theme.colors.grey10};
`;

export const OptionList = styled.ul`
  width: 200px;
  height: auto;
  padding: 21px 0 21px 22px;
  position: absolute;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.grey9};
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  li {
    &:hover{
        cursor: pointer;
    }
    height: 28px;
    color: ${(props) => props.theme.colors.grey2};
    ${(props) => props.theme.typography.text["body-1-400"]};
  }
`;
