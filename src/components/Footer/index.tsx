import { FooterContainer, Image, Span, Button } from './style'
import Logotipo from '../../assets/motors-shop.png'

export default function Footer() {
    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <FooterContainer>
        <Image src={Logotipo} alt="logotipo do site"/>
        <Span>© 2022 -  Todos os direitos reservados.</Span>
        <Button onClick={() => backToTop()}>↑</Button>
    </FooterContainer>
  )
}
