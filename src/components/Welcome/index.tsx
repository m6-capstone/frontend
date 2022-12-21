import {
  WelcomeContainer,
  TitleContainer,
  Title,
  Text,
  ButtonContainer,
  Button,
} from "./style";

export default function Welcome() {
  return (
    <WelcomeContainer>
      <TitleContainer>
        <Title>Velocidade e experiência em um lugar feito para você</Title>
        <Text>Um ambiente feito para você explorar o seu melhor</Text>
      </TitleContainer>
      <ButtonContainer>
        <Button>Carros</Button>
        <Button>Motos</Button>
      </ButtonContainer>
    </WelcomeContainer>
  );
}
