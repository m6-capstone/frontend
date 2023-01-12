import { Container, Image, ImageWrapper } from "./styles";
import car from "../../assets/cars/car1.svg";
import { useMediaQuery } from "usehooks-ts";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { useContext } from "react";

export default function ProductImage() {
  const isTablet = useMediaQuery("(min-width: 768px)");

  const { advertData } = useContext(AdvertsContext);

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={advertData.coverImage}
          alt="imagem do produto"
          props={{ isTablet }}
        />
      </ImageWrapper>
    </Container>
  );
}
