import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { registerUser } from "../../store/User/registerUser";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  RegisterDiv,
  RegisterForm,
  RegisterFormDiv,
  RegisterFormLabel,
  RegisterTitle,
  RegisterWrapper,
} from "./style";

export const RegisterContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (data: any) => {
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        cellphone: data.cellphone,
        birthdate: data.birthdate,
        description: data.description,
        cpf: data.cpf,
        password: data.password,
        isSeller: true,
      })
    );
    navigate("/");
  };

  return (
    <>
      <RegisterWrapper>
        <RegisterDiv>
          <RegisterTitle>Registro</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit(onFinish)}>
            <RegisterFormLabel>Infomações pessoais</RegisterFormLabel>
            <Input
              placeholder="Ex: Samuel Leão"
              type="text"
              label="Nome"
              register={{ ...register("name") }}
              error={errors.name?.message}
            />
            <Input
              placeholder="Ex: samuel@kenzie.com.br"
              type="email"
              label="Email"
              register={{ ...register("email") }}
              error={errors.email?.message}
            />
            <Input
              placeholder="000.000.000-00"
              type="text"
              label="CPF"
              register={{ ...register("cpf") }}
              error={errors.cpf?.message}
            />
            <Input
              placeholder="(DDD) 90000-0000"
              type="phone"
              label="Celular"
              register={{ ...register("cellphone") }}
              error={errors.cellphone?.message}
            />
            <Input
              placeholder="00/00/00"
              type="date"
              label="Data de nascimento"
              register={{ ...register("birthdate") }}
              error={errors.birthdate?.message}
            />
            <Input
              placeholder="Digitar descrição"
              type="text"
              label="Descrição"
              register={{ ...register("description") }}
              error={errors.description?.message}
            />
            <RegisterFormLabel>Infomações de endereço</RegisterFormLabel>
            <Input
              placeholder="00000.000"
              type="text"
              label="CEP"
              register={{ ...register("cep") }}
              error={errors.cep?.message}
            />
            <RegisterFormDiv>
              <Input
                placeholder="Digitar estado"
                type="text"
                label="Estado"
                register={{ ...register("state") }}
                error={errors.state?.message}
              />
              <Input
                placeholder="Digitar cidade"
                type="text"
                label="Cidade"
                register={{ ...register("city") }}
                error={errors.city?.message}
              />
            </RegisterFormDiv>
            <Input
              placeholder="Digitar rua"
              type="text"
              label="Rua"
              register={{ ...register("address") }}
              error={errors.address?.message}
            />
            <RegisterFormDiv>
              <Input
                placeholder="Digitar número"
                type="text"
                label="Número"
                register={{ ...register("number") }}
                error={errors.number?.message}
              />
              <Input
                placeholder="Ex: apart 307"
                type="text"
                label="Complemento"
                register={{ ...register("complement") }}
                error={errors.complement?.message}
              />
            </RegisterFormDiv>
            <RegisterFormLabel>Tipo de conta</RegisterFormLabel>
            <RegisterFormDiv>
              <Button
                textStyle="button-big-text"
                content="Comprador"
                borderColor="brand1"
                color="white"
                backgroundColor="brand1"
              />
              <Button
                textStyle="button-big-text"
                content="Anuciante"
                borderColor="grey4"
                color="grey0"
              />
            </RegisterFormDiv>
            <Input
              placeholder="Digitar senha"
              type="password"
              label="Senha"
              register={{ ...register("password") }}
              error={errors.password?.message}
            />
            <Input
              placeholder="Digitar senha"
              type="password"
              label="Confirmar Senha"
              register={{ ...register("confirmPassword") }}
              error={errors.confirmPassword?.message}
            />
            <Button
              textStyle="button-big-text"
              content="Finalizar cadastro"
              borderColor="brand1"
              color="white"
              backgroundColor="brand1"
            />
          </RegisterForm>
        </RegisterDiv>
      </RegisterWrapper>
    </>
  );
};
