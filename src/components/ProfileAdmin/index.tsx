import { useContext, useState } from "react";
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

export const ProfileAdmin = () => {
  const [modal, setModal] = useState(false);

  const { userData, userLogout, isLoggedIn } = useContext(UserContext);

  return (
    <>
      {modal && <ModalComponent handleModal={setModal}></ModalComponent>}
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
              setModal(true);
            }}
          ></Button>
        </Profile>
      </ProfileAdminContainer>
    </>
  );
};
