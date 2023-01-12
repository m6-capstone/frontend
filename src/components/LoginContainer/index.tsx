import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/User/UserContext";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  LoginContent,
  LoginDiv,
  LoginDontHaveAccount,
  LoginForgotPassword,
  LoginForm,
  LoginPasswordContainer,
  LoginTitle,
  LoginWrapper,
} from "./style";

export const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userData, userLogin, isFetching, isSuccess, isError } =
    useContext(UserContext);

  const navigate = useNavigate();

  const onFinish = async (data: any) => {
    console.log(data);
    await userLogin(data);
  };

  useEffect(() => {
    if (!isFetching) {
      if (isSuccess) {
        toast.success(`Seja bem-vindo(a), ${userData?.name}!`);
        navigate("/myprofile");
      }
      if (isError) {
        toast.error(`E-mail ou senha incorretos`);
      }
    }
  }, [isFetching]);

  return (
    <>
      <LoginWrapper>
        {isFetching ? (
          <h1>Loading</h1>
        ) : (
          <LoginDiv>
            <LoginTitle>Login</LoginTitle>
            <LoginContent>
              <LoginForm onSubmit={handleSubmit(onFinish)}>
                <Input
                  placeholder="Digitar usuário"
                  type="email"
                  label="Usuário"
                  register={{ ...register("email") }}
                  error={errors.email?.message}
                />
                <LoginPasswordContainer>
                  <Input
                    placeholder="Digitar senha"
                    type="password"
                    label="Senha"
                    register={{ ...register("password") }}
                    error={errors.password?.message}
                  />

                  <LoginForgotPassword>Esqueci minha senha</LoginForgotPassword>
                </LoginPasswordContainer>
                <Button
                  textStyle="button-big-text"
                  content="Entrar"
                  borderColor="brand1"
                  color="white"
                  backgroundColor="brand1"
                />
              </LoginForm>
              <LoginDontHaveAccount>
                Ainda não possui conta?
              </LoginDontHaveAccount>
              <Button
                textStyle="button-big-text"
                content="Cadastrar"
                borderColor="grey4"
                color="grey0"
              />
            </LoginContent>
          </LoginDiv>
        )}
      </LoginWrapper>
    </>
  );
};
