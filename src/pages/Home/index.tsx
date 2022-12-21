import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import Welcome from "../../components/Welcome";

export const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <CarrosselLeilão />
    </>
  );
};
