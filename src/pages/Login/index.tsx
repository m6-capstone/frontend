import { useContext, useEffect } from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoginContainer } from "../../components/LoginContainer";
import { UserContext } from "../../contexts/User/UserContext";

export const Login = () => {
  const { autoLogin, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      autoLogin();
    }
  }, []);

  return (
    <>
      <Header />
      {<LoginContainer />}
      <Footer />
    </>
  );
};
