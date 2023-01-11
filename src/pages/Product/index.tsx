import { Header } from "../../components/Header";
import AdvertOwnerInformation from "../../components/AdvertOwnerInformation/index";
import CarInformation from "../../components/CarInformation";
import Description from "../../components/Description";
import Comments from "../../components/Comments";
import ProductImage from "../../components/ProductImage";
import ListImages from "../../components/ListImages";
import CreatesComments from "../../components/CreatesComments";
import { GlobalContainer, Container, Main, Aside } from "./styles";
import Footer from "../../components/Footer";
import { useMediaQuery } from "usehooks-ts";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/User/UserContext";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { useParams } from "react-router-dom";

export const Product = () => {
  const isMobile = useMediaQuery("(min-width: 375px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { autoLogin, isLoggedIn, userData } = useContext(UserContext);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      autoLogin();
    }
  }, []);

  const { findCarById, advertData, isFetching } = useContext(AdvertsContext);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      findCarById(id);
    }
  }, []);

  return (
    <>
      <Header />
      {!isFetching && (
        <GlobalContainer>
          <Main>
            <ProductImage />
            <CarInformation />
            <Description />

            <Container props={{ isDesktop }}>
              <ListImages />
              <AdvertOwnerInformation />
            </Container>

            <Comments />
            <CreatesComments />
          </Main>

          <Aside props={{ isMobile, isDesktop }}>
            <ListImages />
            <AdvertOwnerInformation />
          </Aside>
        </GlobalContainer>
      )}
      <Footer />
    </>
  );
};
