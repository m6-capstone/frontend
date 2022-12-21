import { Container, Title, CommentsContainer, Avatar, Name, Date, Comments} from "./style"

export default function comments() {
  return (
    <Container>
        <Title>Comentários</Title>
        <CommentsContainer>
          <Avatar>DJ</Avatar>
          <Name>Daniel Josias</Name>
          <Date>• há 3 dias</Date>
        </CommentsContainer>
        <Comments>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Comments> 
    </Container>
  )
}
