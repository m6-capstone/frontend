import { useContext, useState } from "react";
import { useScreen } from "usehooks-ts";
import { Button } from "../Button";
import { ModalComponent } from "../Modal";
import { UserContext } from "../../contexts/User/UserContext";
import {
  BlueBackground,
  Icon,
  Profile,
  ProfileAdminContainer,
  ProfileDescription,
  ProfileTag,
  ProfileTitle,
  TitleWrapper,
} from "../ProfileAdmin/style";

export const ProfileCommon = () => {
  const [modal, setModal] = useState(false);

  const { userData, userLogout, isLoggedIn } = useContext(UserContext);

  return (
    <>
      <ProfileAdminContainer>
        <BlueBackground></BlueBackground>
        <Profile style={{ maxHeight: "90vh" }}>
          {!userData ? (
            <ProfileTitle style={{ textAlign: "center" }}>
              Perfil não encontrado
            </ProfileTitle>
          ) : (
            <>
              <Icon>SL</Icon>
              <TitleWrapper>
                <ProfileTitle>{userData?.name}</ProfileTitle>
                <ProfileTag>
                  {userData?.isSeller ? "Anunciante" : "Comprador"}
                </ProfileTag>
              </TitleWrapper>
              <ProfileDescription>{userData?.description}</ProfileDescription>
            </>
          )}
        </Profile>
      </ProfileAdminContainer>
    </>
  );
};
