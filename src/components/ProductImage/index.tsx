import { Container, Image, ImageWrapper } from "./styles";
import car from "../../assets/cars/car1.svg";
import { useMediaQuery } from "usehooks-ts";

export default function ProductImage() {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <ImageWrapper>
        <Image src={car} alt="imagem do produto" props={{ isTablet }} />
      </ImageWrapper>
    </Container>
  );
}
