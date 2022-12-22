import { useMediaQuery } from "usehooks-ts";
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

  return (
    <Container>
      <Subtitle>
        Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
      </Subtitle>
      <InfoConteiner props={{ isDesktop }}>
        <InfoConteinerYearMileage>
          <Info>2013</Info> <Info>0 KM</Info>
        </InfoConteinerYearMileage>
        <Price>R$ 00.000,00</Price>
      </InfoConteiner>
      <Button
        textStyle="button-medium-text"
        color="white"
        backgroundColor="brand1"
        content="Comparar"
        borderColor="brand1"
        height="38px"
        width="100px"
        padding="0"
      ></Button>
    </Container>
  );
}
