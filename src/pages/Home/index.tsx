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
      <CarrosselLeilão name={true} adminView={false} />
      <CarrosselCarrosMotos
        title="Carros"
        mock={mockCarros}
        name={true}
        adminView={false}
      />
      <CarrosselCarrosMotos
        title="Motos"
        mock={mockMotos}
        name={true}
        adminView={false}
      />
      <Footer />
    </>
  );
};
