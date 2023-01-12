import {
  Container,
  ModalHeader,
  ModalTitle,
  IconCloseButton,
  ImageContainer,
  Wrapper,
  Image,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export default function image({ handleCloseModal, images }: any) {
  return (
    <Container>
      <ModalHeader>
        <ModalTitle>Imagem do veículo</ModalTitle>
        <IconCloseButton onClick={() => handleCloseModal(false)}>
          <AiOutlineClose />
        </IconCloseButton>
      </ModalHeader>

      <ImageContainer>
        <Wrapper>
          <Image src={images} />
        </Wrapper>
      </ImageContainer>
    </Container>
  );
}
