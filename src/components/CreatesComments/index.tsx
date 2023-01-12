import {
  Container,
  CommentsHeader,
  Initials,
  Name,
  CommentsContainer,
  Comments,
  RecomendationContainer,
  Recomendation,
} from "./styles";
import { Button } from "../Button";
import { useMediaQuery, useScreen } from "usehooks-ts";
import { useContext, useEffect, useState } from "react";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { FieldValues, useController, useForm } from "react-hook-form";
import { IComment } from "../../contexts/Adverts/interfaces";
import { UserContext } from "../../contexts/User/UserContext";

export default function CreatesComments() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { advertData, isFetching, createComment, refreshComments } =
    useContext(AdvertsContext);
  const {userData} = useContext(UserContext)
  

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onFinish = async (data: any) => {
    await createComment(advertData.id, data);
  };

  const [textComment, setTextComment] = useState("");

  useEffect(() => {
    setValue("text", textComment);
  }, [textComment]);

  register("text", {
    onChange: (e) => setTextComment(e.target.value),
  });

  const setInput = (text: string) => {
    setTextComment(text);
  };

  return (
    <Container>
      {!isFetching && (
        <CommentsHeader>
          <Initials>{userData?.name[0] || "U"}</Initials>
          <Name>{userData?.name || "Usuario não Registrado"}</Name>
        </CommentsHeader>
      )}
      <form onSubmit={handleSubmit(onFinish)}>
        <CommentsContainer>
          <Comments
            value={textComment}
            {...register("text")}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          ></Comments>
          {isDesktop && (
            <Button
              content="Comentar"
              textStyle="button-medium-text"
              backgroundColor="brand1"
              color="white"
              width="70px"
              padding="20px"
            />
          )}
        </CommentsContainer>
        {isMobile && (
          <Button
            content="Comentar"
            textStyle="button-medium-text"
            backgroundColor="brand1"
            color="white"
            width="70px"
            padding="20px"
          />
        )}
      </form>

      <RecomendationContainer>
        <Recomendation onClick={() => setInput("Gostei muito!")}>
          Gostei muito!
        </Recomendation>
        <Recomendation onClick={() => setInput("Incrível!")}>
          Incrível!
        </Recomendation>
        <Recomendation
          onClick={() => setInput("Recomendei para os meus amigos!")}
        >
          Recomendei para os meus amigos!
        </Recomendation>
      </RecomendationContainer>
    </Container>
  );
}
