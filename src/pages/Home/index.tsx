import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
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
    </>
  );
};
