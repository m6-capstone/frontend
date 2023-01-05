import { useForm } from "react-hook-form";
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

  return (
    <>
      <LoginWrapper>
        <LoginDiv>
          <LoginTitle>Login</LoginTitle>
          <LoginContent>
            <LoginForm>
              <Input
                placeholder="Digitar usuário"
                type="text"
                label="Usuário"
                register={{ ...register("user") }}
                error={errors.user?.message}
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
            <LoginDontHaveAccount>Ainda não possui conta?</LoginDontHaveAccount>
            <Button
              textStyle="button-big-text"
              content="Cadastrar"
              borderColor="grey4"
              color="grey0"
            />
          </LoginContent>
        </LoginDiv>
      </LoginWrapper>
    </>
  );
};
