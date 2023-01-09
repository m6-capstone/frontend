import { Container, Title, ImageContainer, Image } from "./styles";
import { mockCarros } from "../../mocks";
import { useState } from "react";
import ModalShowImage from '../ModalShowImage'

export default function listImage() {
  const [modal,setModal] = useState(false)
  const [images, setImages] = useState({})

  const handleOpenModal = (id:number) =>{
    setModal(true)

    const image = mockCarros.filter((car)=>{
      return car.id === id
    })
    setImages(image)
  }

  return (
    <Container>
      {modal && <ModalShowImage handleModal={setModal} images={images}/>}
      <Title>Fotos</Title>
      <ImageContainer>
        {mockCarros.map((car) => {
          return <Image key={car.id} src={car.image} onClick={() => handleOpenModal(car.id)} />
        })}
      </ImageContainer>
    </Container>
  );
}
