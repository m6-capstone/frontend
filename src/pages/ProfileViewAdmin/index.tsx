import { useEffect, useState } from "react";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProfileAdmin } from "../../components/ProfileAdmin";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { mockCarros, mockMotos } from "../../mocks";
import { getUser } from "../../store/User/getUser";
import { ContentWrapper } from "./style";

export const ProfileViewAdmin = () => {
  const dispatch = useAppDispatch();
  const { userToken } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (userToken) {
      dispatch(getUser({ userToken }));
    }
  }, []);

  return (
    <>
      <Header />
      <ContentWrapper>
        <ProfileAdmin />
        <CarrosselLeilão name={false} adminView={true} />
        <CarrosselCarrosMotos
          title="Carros"
          mock={mockCarros}
          name={true}
          adminView={true}
        />
        <CarrosselCarrosMotos
          title="Motos"
          mock={mockMotos}
          name={true}
          adminView={true}
        />
        <Footer />
      </ContentWrapper>
    </>
  );
};
