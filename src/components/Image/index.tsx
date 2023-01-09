import { Container, ModalHeader , ModalTitle, IconCloseButton, ImageContainer, Wrapper, Image } from './styles'
import { AiOutlineClose } from "react-icons/ai";

export default function image({handleCloseModal,images}:any) {
  return (
    <Container>
      <ModalHeader>
          <ModalTitle>Imagem do veículo</ModalTitle>
          <IconCloseButton onClick={() => handleCloseModal(false)}>
              <AiOutlineClose/>
          </IconCloseButton>
      </ModalHeader>

      <ImageContainer>
        <Wrapper>
          {images.map((car: any, index: any)=>{
            return <Image key={index} src={car.image}/>
          })}
        </Wrapper>
      </ImageContainer>
    </Container>
  )
}
