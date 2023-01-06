import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Welcome from "../../components/Welcome";
import { mockCarros, mockMotos } from "../../mocks";

export const Home = () => {
  useEffect(() => {}, []);

  const refCarros = useRef(null);
  const refMotos = useRef(null);
  const refLeilao = useRef(null);

  const handleScroll = (ref: any) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  let { element } = useParams();

  useEffect(() => {
    console.log(element);
    if (element === "carros") {
      handleScroll(refCarros.current);
    } else if (element === "motos") {
      handleScroll(refMotos.current);
    } else if (element === "leilao") {
      handleScroll(refLeilao.current);
    }
  }, [element]);

  return (
    <>
      <Header />
      <Welcome />
      <CarrosselLeilão refNav={refLeilao} name={true} adminView={false} />
      <CarrosselCarrosMotos
        refNav={refCarros}
        title="Carros"
        mock={mockCarros}
        name={true}
        adminView={false}
      />
      <CarrosselCarrosMotos
        refNav={refMotos}
        title="Motos"
        mock={mockMotos}
        name={true}
        adminView={false}
      />
      <Footer />
    </>
  );
};
