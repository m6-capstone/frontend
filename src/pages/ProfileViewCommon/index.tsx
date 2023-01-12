import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProfileAdmin } from "../../components/ProfileAdmin";
import { ProfileCommon } from "../../components/ProfileCommon";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { UserContext } from "../../contexts/User/UserContext";
import { ContentWrapper } from "../ProfileViewAdmin/style";

export const ProfileViewCommon = () => {
  const { advertData } = useContext(AdvertsContext);

  const { isFetching, getUserById, userData } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUserById(id);
    }
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Header />
      <ContentWrapper>
        {!isFetching && userData ? (
          <>
            <ProfileCommon />
            <CarrosselCarrosMotos
              listType="cars"
              title="Carros"
              name={true}
              adminView={false}
            />
            <CarrosselCarrosMotos
              listType="motorcycles"
              title="Motos"
              name={true}
              adminView={false}
            />
            <Footer />
          </>
        ) : (
          <h1 style={{ textAlign: "center" }}>Perfil não encontrado</h1>
        )}
      </ContentWrapper>
    </>
  );
};
