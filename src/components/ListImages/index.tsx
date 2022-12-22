import { Container, Title, ImageContainer, Image } from "./style";
import { mockCarros } from '../../mocks'

export default function listImage(){
    return(
        <Container>
            <Title>Fotos</Title>
            <ImageContainer>
                {mockCarros.map((car,index) =>{
                    return <Image key={index} src={car.image}/> 
                })}
            </ImageContainer>
        </Container>
    )

}