import { Container, Title, ImageContainer, Image } from "./styles";
import { mockCarros } from "../../mocks";
import { useContext, useState } from "react";
import ModalShowImage from "../ModalShowImage";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";

export default function listImage() {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState({});

  const handleOpenModal = (id: number) => {
    setModal(true);

    const image = mockCarros.filter((car) => {
      return car.id === id;
    });
    setImages(image);
  };

  const { advertData } = useContext(AdvertsContext);

  return (
    <Container>
      {modal && <ModalShowImage handleModal={setModal} images={images} />}
      <Title>Fotos</Title>
      <ImageContainer>
        {advertData.galleryImages.length === 0 ? (
          <h1>Lista vazia</h1>
        ) : (
          advertData.galleryImages.map((image, index, arr) => {
            return (
              <Image
                key={index}
                src={image}
                onClick={() => handleOpenModal(index)}
              />
            );
          })
        )}
      </ImageContainer>
    </Container>
  );
}
