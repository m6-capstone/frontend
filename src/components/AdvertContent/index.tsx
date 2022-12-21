import { Container, Form, AdvertHeader, HeaderTitle, ModalCloseButton, AdverTypeTitle, AdvertType, SubTitle, InputContainer , Wrapper,  LabelContainer, Label, Input, VehicleTypeTitle, VehicleType, ButtonContainer } from "./style"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-toastify'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from "../Button";

export default function AdvertContent({handleCloseModal}:any) {
  const advertSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    year: yup.string().required("Ano obrigatório").email("E-mail inválido"),
    mileage: yup.number().required("Quilometragem obrigatória"),
    price: yup.string().required("Preço obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    coverImage: yup.string().required("Imagem da capa obrigatória"),
    galleryImage: yup.string().required("Imagem da galeria obrigatória")
  });

  type Advert = yup.InferType<typeof advertSchema>
  
  const {
    register,
    handleSubmit,
    formState: { errors }
    } = useForm({
    resolver: yupResolver(advertSchema)
  });
    
  const onSubmitFunction = async (data:object) => {
    //enviar o objeto data , que contém as info.. do anúncio, para o back end
    //toast.success('')
    //toast.error('')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <>
          <AdvertHeader>
            <HeaderTitle> Criar anúncio</HeaderTitle>
            <ModalCloseButton onClick={handleCloseModal}><AiOutlineClose fill="#ADB5BD"/></ModalCloseButton>
          </AdvertHeader>

          <AdverTypeTitle>Tipo de anúncio</AdverTypeTitle> 
          <AdvertType>
              <Button content="Venda" textStyle="button-big-text" backgroundColor="brand1" width="228px" color="white"/>
              <Button content="Leilão" textStyle="button-big-text" width="228px" borderColor="grey4"/>
          </AdvertType>

          <SubTitle>Informações do veículo</SubTitle>
          
          <InputContainer>
            <>
              <Label>Título</Label>
              <Input placeholder="Digitar título" type="text" {...register("title")} />
              {errors.title?.message}

              <LabelContainer>
                <Label>Ano</Label>
                <Label>Quilometragem</Label>
              </LabelContainer>  

              <Wrapper>
                <>
                  <Input placeholder="2022" type="text" {...register("year")} />
                  {errors.year?.message}

                  <Input placeholder="0" type="text" {...register("mileage")} />
                  {errors.mileage?.message && "Quilometragem obrigatória"}
                </>
              </Wrapper>

              <Label>Preço</Label>
              <Input placeholder="45.000,00" type="text" {...register("price")} />
              {errors.price?.message}

              <Label>Descrição</Label>
              <Input placeholder="Digitar descrição" type="text"{...register("description")} />
              {errors.description?.message}
            </>
          </InputContainer>

          <VehicleTypeTitle>Tipo de Veículo</VehicleTypeTitle> 
          <VehicleType>
              <Button content="Carro" textStyle="button-big-text" backgroundColor="brand1" width="228px" color="white"/>
              <Button content="Moto" textStyle="button-big-text" width="228px" borderColor="grey4"/>
          </VehicleType>

          <InputContainer>
            <>
            <Label>Imagem da capa</Label>
            <Input placeholder="Inserir URL da imagem" type="text"{...register("coverImage")} />
            {errors.coverImage?.message}

            <Label>2° imagem da capa</Label>
            <Input placeholder="Inserir URL da imagem" type="text"{...register("galleryImage")} />
            {errors.galleryImage?.message}
            </>
          </InputContainer>

          <Button content="Adicionar campo para imagem da galeria" textStyle="button-small-text" color="brand1" height="5px" backgroundColor="brand4"/>
          
          <ButtonContainer>
            <Button content="Cancelar" textStyle="button-medium-text" width="228px" borderColor="grey6"  backgroundColor="grey6" type="reset" onClick={handleCloseModal}/>
            <Button content="Criar anúncio" textStyle="button-medium-text" backgroundColor="brand3" width="228px" color="white" type="submit" onClick={handleCloseModal}/>
          </ButtonContainer>
        </>
      </Form>
    </Container>
  )
}
/*  */