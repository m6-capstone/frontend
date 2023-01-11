import { Dispatch, SetStateAction } from "react";
import AdvertContent from "../AdvertContent";
import { ModalBackground, ModalContainer } from "./style";

interface IModalComponent {
  handleModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalComponent = ({ handleModal }: IModalComponent) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <AdvertContent handleCloseModal={handleModal} />
      </ModalContainer>
    </ModalBackground>
  );
};
