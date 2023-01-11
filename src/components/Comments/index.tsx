import { useContext, useEffect, useState } from "react";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import {
  Container,
  Title,
  CommentsContainer,
  Avatar,
  Name,
  Date,
  Comment,
} from "./style";

export default function Comments() {
  const { advertData, isFetching, commentsList, refreshComments } =
    useContext(AdvertsContext);

  useEffect(() => {
    console.log("hot!");
  }, [advertData.comments]);

  return (
    <Container>
      <Title>Comentários</Title>
      {!isFetching && (
        <>
          {advertData.comments.map((comment, index) => (
            <>
              <CommentsContainer>
                <Avatar>{advertData.user?.name[0]}</Avatar>
                <Name>{advertData.user?.name}</Name>
                <Date>• há 3 dias</Date>
              </CommentsContainer>
              <Comment>{comment.text}</Comment>
            </>
          ))}
        </>
      )}
    </Container>
  );
}
