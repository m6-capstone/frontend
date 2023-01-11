import { useContext } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { Button } from "../Button";
import {
  Container,
  Subtitle,
  Price,
  InfoConteiner,
  InfoConteinerYearMileage,
  Info,
} from "./style";

export default function CarInformation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { advertData } = useContext(AdvertsContext);

  return (
    <Container>
      <Subtitle>{advertData.title}</Subtitle>
      <InfoConteiner props={{ isDesktop }}>
        <InfoConteinerYearMileage>
          <Info>{advertData.year}</Info> <Info>{advertData.mileage}</Info>
        </InfoConteinerYearMileage>
        <Price>R$ {advertData.price}</Price>
      </InfoConteiner>
      <Button
        textStyle="button-medium-text"
        color="white"
        backgroundColor="brand1"
        content="Comprar"
        borderColor="brand1"
        height="38px"
        width="100px"
        padding="0"
      ></Button>
    </Container>
  );
}
