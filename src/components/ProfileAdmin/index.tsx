import { useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ModalCreatesAdvert from "../ModalCreatesAdvert";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const ProfileAdmin = () => {
  const [modal, setModal] = useState(false);
  const { userInfo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  console.log(userInfo);

  return (
    <>
      {modal && <ModalComponent handleModal={setModal}></ModalComponent>}
      <ProfileAdminContainer>
        <BlueBackground></BlueBackground>
        <Profile>
          <Icon>SL</Icon>
          <TitleWrapper>
            <ProfileTitle>{userInfo?.name}</ProfileTitle>
            <ProfileTag>
              {userInfo?.isSeller ? "Anunciante" : "Comprador"}
            </ProfileTag>
          </TitleWrapper>
          <ProfileDescription>{userInfo?.description}</ProfileDescription>
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
