import { useContext, useEffect, useState } from "react";
import { useScreen } from "usehooks-ts";
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
import { UserContext } from "../../contexts/User/UserContext";
import ModalCreatesAdvert from "../ModalCreatesAdvert";
import { ModalEditProfile } from "../ModalEditProfile";

export const ProfileAdmin = () => {
  const [modalCreateAdvert, setModalCreateAdvert] = useState(false);
  // const [modalEditProfile, setModalEditProfile] = useState(false);

  const {
    userData,
    userLogout,
    isLoggedIn,
    modalEditProfile,
    closeEditProfile,
  } = useContext(UserContext);

  useEffect(() => {
    console.log(modalEditProfile);
  }, [modalEditProfile]);

  return (
    <>
      {/* {modal && (
        <ModalCreatesAdvert
          modal={modal}
          handleCloseModal={setModal}
        ></ModalCreatesAdvert>
      )} */}
      {modalCreateAdvert && (
        <ModalComponent handleModal={setModalCreateAdvert}></ModalComponent>
      )}

      {modalEditProfile && (
        <ModalEditProfile handleModal={closeEditProfile}></ModalEditProfile>
      )}

      <ProfileAdminContainer>
        <BlueBackground></BlueBackground>
        <Profile>
          <Icon>SL</Icon>
          <TitleWrapper>
            <ProfileTitle>{userData?.name}</ProfileTitle>
            <ProfileTag>
              {userData?.isSeller ? "Anunciante" : "Comprador"}
            </ProfileTag>
          </TitleWrapper>
          <ProfileDescription>{userData?.description}</ProfileDescription>
          <Button
            textStyle="button-big-text"
            content="Criar anúncio"
            borderColor="brand1"
            color="brand1"
            onClick={() => {
              setModalCreateAdvert(true);
            }}
          ></Button>
        </Profile>
      </ProfileAdminContainer>
    </>
  );
};
