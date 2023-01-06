import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Welcome from "../../components/Welcome";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { mockCarros, mockMotos } from "../../mocks";
import { getUser } from "../../store/User/getUser";

export const Home = () => {
  const dispatch = useAppDispatch();

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

  const { userToken } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (userToken) {
      dispatch(getUser({ userToken }));
    }
  }, []);

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
