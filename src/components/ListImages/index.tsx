import { Container, Title, ImageContainer, Image } from "./styles";
import { mockCarros } from "../../mocks";
import { useContext, useState } from "react";
import ModalShowImage from "../ModalShowImage";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";

export default function listImage() {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState({});

  const handleOpenModal = (index: number) => {
    setModal(true);
    setImages(advertData?.galleryImages[index]);
  };

  const { advertData } = useContext(AdvertsContext);

  console.log(advertData?.galleryImages);

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
