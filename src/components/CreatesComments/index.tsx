import { Container, CommentsHeader, Initials, Name, CommentsContainer , Comments, RecomendationContainer, Recomendation } from "./style";
import { Button } from "../Button";

export default function CreatesComments() {
  return (
    <Container>
        <CommentsHeader>
            <Initials>DN</Initials>
            <Name>Daniel Josias</Name>
        </CommentsHeader>

        <CommentsContainer>
          <Comments placeholder="Carro muito confortável, foi uma ótima experiência de compra..."></Comments>
          <Button 
            content="Comentar"
            textStyle="button-medium-text"
            backgroundColor="brand1"
            color="white"
            width="70px"
          />
        </CommentsContainer>
       
        <RecomendationContainer>
          <Recomendation>Gostei muito!</Recomendation>
          <Recomendation>Incrível</Recomendation>
          <Recomendation>Recomendei para os meus amigos!</Recomendation>
        </RecomendationContainer>
    </Container>
  )
}
