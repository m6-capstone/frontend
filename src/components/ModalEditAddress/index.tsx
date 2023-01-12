import { Dispatch, SetStateAction } from "react";
import AdvertContent from "../AdvertContent";
import EditProfileContent from "../EditProfileContent";
import { ModalBackground, ModalContainer } from "../Modal/style";

interface IModalComponent {
  handleModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalEditAddress = ({ handleModal }: IModalComponent) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <EditProfileContent handleCloseModal={handleModal} />
      </ModalContainer>
    </ModalBackground>
  );
};
