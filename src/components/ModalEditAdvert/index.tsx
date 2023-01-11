import { Dispatch, SetStateAction } from "react";
import EditAdvertContent  from '../EditAdvertContent'
import { ModalBackground, ModalContainer } from "./styles";

interface IModalComponent {
  handleModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalComponent = ({ handleModal }: IModalComponent) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <EditAdvertContent handleCloseModal={handleModal} />
      </ModalContainer>
    </ModalBackground>
  );
};
