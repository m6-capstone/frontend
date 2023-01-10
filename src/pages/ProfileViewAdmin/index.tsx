import { useContext, useEffect, useState } from "react";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProfileAdmin } from "../../components/ProfileAdmin";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { UserContext } from "../../contexts/User/UserContext";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { mockCarros, mockMotos } from "../../mocks";
import { getUser } from "../../store/User/getUser";
import { ContentWrapper } from "./style";

export const ProfileViewAdmin = () => {
  const { autoLogin, isLoggedIn } = useContext(UserContext);
  const { advertsList, getAdvertList, isLoaded, isEmpty } =
    useContext(AdvertsContext);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      autoLogin();
      getAdvertList();
    }
    console.log(advertsList);
  }, []);

  useEffect(() => {
    console.log(isEmpty);
  }, [advertsList]);

  return (
    <>
      <Header />
      <ContentWrapper>
        <ProfileAdmin />
        <CarrosselLeilão name={false} adminView={true} />
        {isLoaded && (
          <>
            <CarrosselCarrosMotos title="Carros" name={true} adminView={true} />
            <CarrosselCarrosMotos title="Motos" name={true} adminView={true} />
          </>
        )}

        <Footer />
      </ContentWrapper>
    </>
  );
};
