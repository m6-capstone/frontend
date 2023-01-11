import { Container, Form, AdvertHeader, HeaderTitle, ModalCloseButton, AdverTypeTitle, AdvertType, SubTitle, InputContainer , Wrapper, VehicleTypeTitle, VehicleType, ButtonContainer } from "./style"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-toastify'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from "../Button";
import { Input } from "../Input";

export default function EditAdvertContent({handleCloseModal}:any) {
  const advertSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    year: yup.string().required("Ano obrigatório").email("E-mail inválido"),
    mileage: yup.string().required("Quilometragem obrigatória"),
    price: yup.number().required("Preço obrigatório"),
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
    console.log(data)
    /* handleCloseModal(true) */
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <>
          <AdvertHeader>
            <HeaderTitle> Editar anúncio</HeaderTitle>
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
              <Input placeholder="Digitar título" type="text" label="Título" register={{...register("title")}} error={errors.title?.message} />

              <Wrapper>
                <>
                  <Input placeholder="2022" type="text" label="Ano" register={{...register("year")}} error={errors.year?.message} width="small" />
                  
                  <Input placeholder="0" type="text" label="Quilometragem" register={{...register("mileage")}} error={errors.mileage?.message && "Quilometragem obrigatória"} width="small"/>
                </>
              </Wrapper>

              <Input placeholder="45.000,00" type="number" label="Preço" register={{...register("price")}} error={errors.price?.message} />
              
              <Input placeholder="Digitar descrição" type="textArea" label="Descrição" register={{...register("description")}} error={errors.description?.message} />
            </>
          </InputContainer>

          <VehicleTypeTitle>Tipo de Veículo</VehicleTypeTitle> 
          <VehicleType>
              <Button content="Carro" textStyle="button-big-text" backgroundColor="brand1" width="228px" color="white"/>
              <Button content="Moto" textStyle="button-big-text" width="228px" borderColor="grey4"/>
          </VehicleType>

          <InputContainer>
            <>
            <Input placeholder="Inserir URL da imagem" type="text" label="Imagem da capa" register={{...register("coverImage")}} error={errors.coverImage?.message} />
            <Input placeholder="Inserir URL da imagem" type="text" label=" 2° imagem da capa" register={{...register("galleryImage")}} error={errors.galleryImage?.message} />
            </>
          </InputContainer>

          <Button content="Adicionar campo para imagem da galeria" textStyle="button-small-text" color="brand1" height="5px" backgroundColor="brand4"/>
          
          <ButtonContainer>
            <Button content="Cancelar" textStyle="button-medium-text" width="228px" borderColor="grey6"  backgroundColor="grey6" type="reset" onClick={handleCloseModal}/>
            <Button content="Editar anúncio" textStyle="button-medium-text" backgroundColor="brand3" width="228px" color="white" type="submit" />
          </ButtonContainer>
        </>
      </Form>
    </Container>
  )
}
