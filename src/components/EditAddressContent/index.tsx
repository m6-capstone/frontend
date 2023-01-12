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

export default function EditAddressContent({ handleCloseModal }: any) {
  const { createAdvert, isSuccess } = useContext(AdvertsContext);
  const { userData, isLoggedIn, autoLogin, editProfile } =
    useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      autoLogin();
    }
  }, []);

  const editAddressSchema = yup.object().shape({
    cep: yup.string().required("CEP obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    street: yup.string().required("Rua obrigatória"),
    number: yup.string().required("Número obrigatório"),
    complement: yup.string().required("Complemento obrigatório"),
  });

  type EditProfile = yup.InferType<typeof editAddressSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editAddressSchema),
    defaultValues: {
      cep: userData?.,
      state: userData?.state,
      city: userData?.city,
      street: userData?.street,
      number: userData?.number,
      complement: userData?.complement,
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
            <HeaderTitle>Editar endereço</HeaderTitle>
            <ModalCloseButton onClick={() => handleCloseModal(false)}>
              <AiOutlineClose fill="#ADB5BD" />
            </ModalCloseButton>
          </AdvertHeader>

          <AdverTypeTitle>Informações de endereço</AdverTypeTitle>

          <Input
            placeholder="89888.888"
            type="name"
            label="CEP"
            register={{ ...register("cep") }}
            error={errors.cep?.message}
          />
          <Input
            placeholder="Paraná"
            type="text"
            label="Estado"
            register={{ ...register("state") }}
            error={errors.state?.message}
          />
          <Input
            placeholder="Curitiba"
            type="text"
            label="Cidade"
            register={{ ...register("city") }}
            error={errors.city?.message}
          />
          <Input
            placeholder="Rua do Paraná"
            type="text"
            label="Rua"
            register={{ ...register("street") }}
            error={errors.street?.message}
          />
          <Input
            placeholder="1029"
            type="text"
            label="Número"
            register={{ ...register("number") }}
            error={errors.number?.message}
          />
          <Input
            placeholder="Apart 12"
            type="text"
            label="Complemento"
            register={{ ...register("complement") }}
            error={errors.complement?.message}
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
