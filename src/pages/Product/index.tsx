import { Header } from "../../components/Header";
import AdvertOwnerInformation from "../../components/AdvertOwnerInformation/index";
import { BlueBackground, Profile } from "../../components/ProfileAdmin/style";
import CarInformation from "../../components/CarInformation";
import Description from "../../components/Description";
import Comments from "../../components/Comments";

export const Product = () => {
  return (
    <>
      <Header />
      <CarInformation />
      <Description />
      <Comments />
      <AdvertOwnerInformation />
    </>
  );
};
