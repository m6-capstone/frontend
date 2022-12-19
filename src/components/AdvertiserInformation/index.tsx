import { Container } from "./style"

export default function AdvertiserInformation() {
  return (
    <Container>
        <div className="advertiser__initials">DN</div>
        <div className="advertiser__container">
            <span className="advertiser__name">Daniel Josias</span>
            <span className="advertiser__label">Anunciante</span>
        </div>
        <p className="advertiser__about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button className="advertiser__button">Criar anúncio</button>
    </Container>
  )
}
