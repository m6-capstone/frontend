import { useContext } from "react";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { Container, Subtitle, Text } from "./style";

export default function Description() {
  const { advertData } = useContext(AdvertsContext);

  return (
    <Container>
      <Subtitle>Descrição</Subtitle>
      <Text>{advertData.description}</Text>
    </Container>
  );
}
