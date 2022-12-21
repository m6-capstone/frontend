import styled from "styled-components";

interface Props {
  type: string;
  width: string;
}

export const InputCurl = styled.div<Props>`
  width: 100%;
  max-width: ${({ width }) => (width === "small" ? "140px" : "315px")};
  height: ${({ type }) => (type === "textArea" ? "105px" : "73px")};
  display: flex;
  flex-direction: column;
  gap: 8px;
  .inputCurl__label {
    font-size: 14px;
    font-weight: 500;
    font-family: "Inter";
    color: var(--grey1);
  }

  .inputCurl__input {
    padding: 0 16px 0 16px;
    width: 100%;
    height: ${({ type }) => (type === "textArea" ? "80px" : "48px")};
    /* border: 1.5px solid var(--grey7); */

    border-radius: 4px;
    color: var(--grey3);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 400;

    ::placeholder {
      color: var(--grey3);
      font-size: 16px;
      font-family: "Inter";
      font-weight: 400;
    }
    :focus {
      border-color: var(--brand2);
      background-color: var(--grey9);
    }
    :hover {
      background-color: var(--grey8);
    }
  }
  .error {
    border-color: none;
  }
;
`