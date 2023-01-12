import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { Button } from "../Button";
import { Container, Name, Text, Initials } from "./style";

export default function AdvertOwnerInformation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { advertData } = useContext(AdvertsContext);
  const navigate = useNavigate();
  return (
    <Container>
      <Initials props={{ isDesktop }}>SL</Initials>
      <Name>{advertData?.user?.name}</Name>
      <Text>{advertData?.user?.description}</Text>
      <Button
        content="Ver todos os anúncios"
        textStyle="button-big-text"
        color="white"
        backgroundColor="grey0"
        onClick={() => {
          navigate(`/profile/${advertData?.user?.id}`);
        }}
      />
    </Container>
  );
}
