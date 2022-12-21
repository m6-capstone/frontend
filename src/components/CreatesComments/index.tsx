import { Container, CommentsHeader, Initials, Name, Comments, RecomendationContainer, Recomendation } from "./style";
import { Button } from "../Button";

export default function CreatesComments() {
  return (
    <Container>
        <CommentsHeader>
            <Initials>DN</Initials>
            <Name>Daniel Josias</Name>
        </CommentsHeader>

        <Comments placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
        
        <Button content="Comentar" textStyle="button-medium-text" backgroundColor="brand1" color="white" width="70px"/>
       
        <RecomendationContainer>
            <Recomendation>Gostei muito!</Recomendation>
            <Recomendation>Incrível</Recomendation>
        </RecomendationContainer>
    </Container>
  )
}
