import Modal from "react-modal";
import AdvertContent from "../AdvertContent";
import { customStyles } from "../../styles/CustomStyles";

interface Props {
  modal: boolean;
  handleCloseModal: () => void;
}

export default function ModalCreatesAdvert({ modal, handleCloseModal }: Props) {
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <AdvertContent handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}
