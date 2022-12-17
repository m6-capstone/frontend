import { Container } from './style'
import  Logotipo  from '../../assets/motors-shop.png'

export default function Footer() {
    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <Container>
        <footer className='footer'>
            <img className='footer__img' src={Logotipo} alt="logotipo do site"/>
            <span className='footer__span'>© 2022 -  Todos os direitos reservados.</span>
            <button onClick={() => backToTop()} className='footer__button'>↑</button>
        </footer>
    </Container>
  )
}
