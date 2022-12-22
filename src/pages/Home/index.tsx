import AdvertOwnerInformation from "../../components/AdvertOwnerInformation";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Welcome from "../../components/Welcome";
import { mockCarros, mockMotos } from "../../mocks";

export const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <CarrosselLeilão />
      <CarrosselCarrosMotos title="Carros" mock={mockCarros} />
      <CarrosselCarrosMotos title="Motos" mock={mockMotos} />
      <AdvertOwnerInformation/>
      <Footer />
    </>
  );
};
