import { Link } from "react-router-dom";
import {
  WelcomeContainer,
  TitleContainer,
  Title,
  Text,
  ButtonContainer,
  Button,
} from "./style";

interface IWelcome {
  refLeilao: React.MutableRefObject<null>;
  refCarros: React.MutableRefObject<null>;
  refMotos: React.MutableRefObject<null>;
}

export default function Welcome() {
  return (
    <WelcomeContainer>
      <TitleContainer>
        <Title>Velocidade e experiência em um lugar feito para você</Title>
        <Text>Um ambiente feito para você explorar o seu melhor</Text>
      </TitleContainer>
      <ButtonContainer>
        <Link to="/home/carros">
          <Button>Carros</Button>
        </Link>

        <Link to="/home/motos">
          <Button>Motos</Button>
        </Link>
      </ButtonContainer>
    </WelcomeContainer>
  );
}
