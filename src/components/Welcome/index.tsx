import { Container } from "./style" 

export default function Welcome() {
  return (
    <Container>
        <div className="welcome">
            <h2 className='welcome__title'>Velocidade e experiência em um lugar feito para você</h2>
            <p className='welcome__paragraph'>Um ambiente feito para você explorar o seu melhor</p>
            
            <div className="welcome__container">
                <button className='welcome__button'>Carros</button>
                <button className='welcome__button'>Motos</button>
            </div>
        </div>
    </Container>
  )
}
