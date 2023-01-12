import { Dispatch, SetStateAction } from "react";
import EditAdvertContent from '../EditAdvertContent'
import { ModalBackground, ModalContainer } from "./style";

interface IModalComponent {
  handleModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalComponent = ({ handleModal }: IModalComponent) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <EditAdvertContent handleModal={handleModal} />
      </ModalContainer>
    </ModalBackground>
  );
};
