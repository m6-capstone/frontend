import { useMediaQuery } from "usehooks-ts";
import { Button } from "../Button";
import { Container, Name, Text, Initials } from "./style";

export default function AdvertOwnerInformation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <Initials props={{isDesktop}}>SL</Initials>
      <Name>Samuel Leão</Name>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <Button
        content="Ver todo anuncios"
        textStyle="button-big-text"
        color="white"
        backgroundColor="grey0"
      />
    </Container>
  );
}
