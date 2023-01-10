import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CarrosselCarrosMotos } from "../../components/CarrosselCarrosMotos";
import { CarrosselLeilão } from "../../components/CarrosselLeilão";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Welcome from "../../components/Welcome";
import { UserContext } from "../../contexts/User/UserContext";
import { mockCarros, mockMotos } from "../../mocks";

export const Home = () => {
  const { isLoggedIn, autoLogin, userData } = useContext(UserContext);

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
    if (element === "carros") {
      handleScroll(refCarros.current);
    } else if (element === "motos") {
      handleScroll(refMotos.current);
    } else if (element === "leilao") {
      handleScroll(refLeilao.current);
    }
  }, [element]);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      autoLogin();
    }
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Header />
      <Welcome />
      <CarrosselLeilão refNav={refLeilao} name={true} adminView={false} />
      <CarrosselCarrosMotos
        refNav={refCarros}
        title="Carros"
        name={true}
        adminView={false}
      />
      <CarrosselCarrosMotos
        refNav={refMotos}
        title="Motos"
        name={true}
        adminView={false}
      />
      <Footer />
    </>
  );
};
