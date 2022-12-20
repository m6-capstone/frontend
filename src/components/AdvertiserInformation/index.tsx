import { Container, Initials, AdvertiserContainer, Name, Label, AboutMe, Button } from "./style"

export default function AdvertiserInformation() {
  return (
    <Container>
      <Initials>DN</Initials>

      <AdvertiserContainer>
        <Name>Daniel Josias</Name>
        <Label>Anunciante</Label>
      </AdvertiserContainer>
      
      <AboutMe>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</AboutMe>
      <Button>Criar anúncio</Button>
    </Container>
  )
}
