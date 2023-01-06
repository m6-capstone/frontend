import {
  Container,
  CommentsHeader,
  Initials,
  Name,
  CommentsContainer,
  Comments,
  RecomendationContainer,
  Recomendation,
} from "./styles";
import { Button } from "../Button";
import { useMediaQuery } from "usehooks-ts";

export default function CreatesComments() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <CommentsHeader>
        <Initials>DN</Initials>
        <Name>Daniel Josias</Name>
      </CommentsHeader>

      <CommentsContainer>
        <Comments placeholder="Carro muito confortável, foi uma ótima experiência de compra..."></Comments>
        {isDesktop && (
          <Button
            content="Comentar"
            textStyle="button-medium-text"
            backgroundColor="brand1"
            color="white"
            width="70px"
            padding="20px"
          />
        )}
      </CommentsContainer>
      {isMobile && (
        <Button
          content="Comentar"
          textStyle="button-medium-text"
          backgroundColor="brand1"
          color="white"
          width="70px"
          padding="20px"
        />
      )}

      <RecomendationContainer>
        <Recomendation>Gostei muito!</Recomendation>
        <Recomendation>Incrível</Recomendation>
        <Recomendation>Recomendei para os meus amigos!</Recomendation>
      </RecomendationContainer>
    </Container>
  );
}
