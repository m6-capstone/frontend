import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;

  overflow-y: scroll;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 94px;
`;
