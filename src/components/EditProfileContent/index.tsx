import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button";
import { Input } from "../Input";
import { mockCarros } from "../../mocks";
import { useContext, useEffect, useState } from "react";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import {
  AdvertHeader,
  AdvertType,
  AdverTypeTitle,
  ButtonContainer,
  Container,
  Form,
  HeaderTitle,
  InputContainer,
  ModalCloseButton,
  SubTitle,
  VehicleType,
  VehicleTypeTitle,
  Wrapper,
} from "../AdvertContent/style";
import { UserContext } from "../../contexts/User/UserContext";

export default function EditProfileContent({ handleCloseModal }: any) {
  const { createAdvert, isSuccess } = useContext(AdvertsContext);
  const { userData, isLoggedIn, autoLogin, editProfile } =
    useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      autoLogin();
    }
  }, []);

  const editProfileSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    cpf: yup.string().required("CPF obrigatório"),
    birthdate: yup.string().required("Data de nascimento obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
  });

  type EditProfile = yup.InferType<typeof editProfileSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: userData?.name,
      email: userData?.email,
      cpf: userData?.cpf,
      cellphone: userData?.cellphone,
      birthdate: userData?.birthdate,
      description: userData?.description,
    },
  });

  const onSubmitFunction = async (data: any) => {
    console.log(data);

    console.log(userData?.id);

    await editProfile(userData?.id, data);

    handleCloseModal(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <>
          <AdvertHeader>
            <HeaderTitle>Editar Perfil</HeaderTitle>
            <ModalCloseButton onClick={() => handleCloseModal(false)}>
              <AiOutlineClose fill="#ADB5BD" />
            </ModalCloseButton>
          </AdvertHeader>

          <AdverTypeTitle>Informações pessoais</AdverTypeTitle>

          <Input
            placeholder="Samuel Leão Silva"
            type="name"
            label="Nome"
            register={{ ...register("name") }}
            error={errors.name?.message}
          />
          <Input
            placeholder="samuel@kenzie.com.br"
            type="email"
            label="Email"
            register={{ ...register("email") }}
            error={errors.email?.message}
          />
          <Input
            placeholder="900.880.090-00"
            type="text"
            label="CPF"
            register={{ ...register("cpf") }}
            error={errors.cpf?.message}
          />
          <Input
            placeholder="(084) 90909-9092"
            type="text"
            label="Celular"
            register={{ ...register("cellphone") }}
            error={errors.cellphone?.message}
          />
          <Input
            placeholder="09/12/99"
            type="text"
            label="Data de nascimento"
            register={{ ...register("birthdate") }}
            error={errors.birthdate?.message}
          />
          <Input
            placeholder=""
            type="text"
            label="Descrição"
            register={{ ...register("description") }}
            error={errors.description?.message}
          />

          <ButtonContainer>
            <Button
              content="Cancelar"
              textStyle="button-medium-text"
              width="228px"
              borderColor="grey6"
              backgroundColor="grey6"
              type="reset"
              onClick={() => handleCloseModal(false)}
            />
            <Button
              content="Salvar"
              textStyle="button-medium-text"
              backgroundColor="brand1"
              width="228px"
              color="white"
              type="submit"
            />
          </ButtonContainer>
        </>
      </Form>
    </Container>
  );
}
