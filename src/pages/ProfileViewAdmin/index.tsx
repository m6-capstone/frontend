import { useContext, useEffect, useState } from "react";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProfileAdmin } from "../../components/ProfileAdmin";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { UserContext } from "../../contexts/User/UserContext";
import { ContentWrapper } from "./style";

export const ProfileViewAdmin = () => {
  const { autoLogin, isLoggedIn, userData } = useContext(UserContext);
  const { advertsList, getAdvertsByUser, isLoaded, isEmpty } =
    useContext(AdvertsContext);

  useEffect(() => {
    if (!isLoggedIn) {
      autoLogin();
    }
  }, []);

  return (
    <>
      <Header />
      <ContentWrapper>
        <ProfileAdmin />
        {/* <CarrosselLeilão name={false} adminView={true} /> */}
        {isLoaded && (
          <>
            <CarrosselCarrosMotos
              listType="cars"
              title="Carros"
              name={true}
              adminView={true}
            />
            <CarrosselCarrosMotos
              listType="motorcycles"
              title="Motos"
              name={true}
              adminView={true}
            />
          </>
        )}

        <Footer />
      </ContentWrapper>
    </>
  );
};
