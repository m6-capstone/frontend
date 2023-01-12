import Image from "../Image";
import { Dispatch, SetStateAction } from "react";
import { ModalBackground, ModalContainer } from "../Modal/style";

interface IModalComponent {
  handleModal: Dispatch<SetStateAction<boolean>>;
  images: object;
}

export default function ModalShowImage({
  handleModal,
  images,
}: IModalComponent) {
  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <Image handleCloseModal={handleModal} images={images} />
        </ModalContainer>
      </ModalBackground>
    </>
  );
}
