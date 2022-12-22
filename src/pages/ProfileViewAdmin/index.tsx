import { useState } from "react";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProfileAdmin } from "../../components/ProfileAdmin";
import { mockCarros, mockMotos } from "../../mocks";
import { ContentWrapper } from "./style";

export const ProfileViewAdmin = () => {
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
