import { useState } from "react";
import { useScreen } from "usehooks-ts";
import { openModalCreateAdvert } from "../../store/ModalCreateAdvert.store";
import { Button } from "../Button";
import { ModalComponent } from "../Modal";
import {
  BlueBackground,
  GreyBackground,
  Icon,
  Profile,
  ProfileAdminContainer,
  ProfileDescription,
  ProfileTag,
  ProfileTitle,
  TitleWrapper,
} from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ModalCreatesAdvert from "../ModalCreatesAdvert";

export const ProfileAdmin = () => {
  const isModalOpen = useSelector(
    (state: RootState) => state.modalCreateAdvert.isOpen
  );

  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <ModalComponent handleModal={setModal}></ModalComponent>}
      <ProfileAdminContainer>
        <BlueBackground></BlueBackground>
        <Profile>
          <Icon>SL</Icon>
          <TitleWrapper>
            <ProfileTitle>Samuel Leão</ProfileTitle>
            <ProfileTag>Anunciante</ProfileTag>
          </TitleWrapper>
          <ProfileDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </ProfileDescription>
          <Button
            textStyle="button-big-text"
            content="Criar anúncio"
            borderColor="brand1"
            color="brand1"
            onClick={() => {
              setModal(true);
            }}
          ></Button>
        </Profile>
      </ProfileAdminContainer>
    </>
  );
};
