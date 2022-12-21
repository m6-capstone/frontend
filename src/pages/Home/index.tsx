import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export const Home = () => {
  return (
    <>
      <Header />
      <Input 
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        width="default"
        defaultValue=""
        register={{ name: "name" }}
        error={undefined}
        className=""
      />
    </>
  );
};
