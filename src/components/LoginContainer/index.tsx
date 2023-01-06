import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUser } from "../../store/User/getUser";
import { userLogin } from "../../store/User/loginUser";
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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, isFinished } = useAppSelector(
    (state) => state.user
  );

  const onFinish = async (data: any) => {
    await dispatch(userLogin({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sucesso!");
      navigate("/");
    }
    if (isError) {
      toast.error("Erro!");
    }
  }, [isFinished]);

  return (
    <>
      <LoginWrapper>
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
