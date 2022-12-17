import { Container } from "./style"

export default function Comments() {
  return (
    <Container>
        <h3 className="comments__title">Comentários</h3>
        <div className="comments__container">
            <span className="comments__avatar">DJ</span>
            <span className="comments__owner">Daniel Josias</span>
            <span className="comments__date">• há 3 dias</span>
        </div>
        <p className="comments">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
    </Container>
  )
}
