import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  ButtonWrapper,
  CarouselCars,
  CarouselCarsContainer,
  CarouselCarsImageContainer,
  CarouselCarsItem,
  CarouselCarsItemDeatils,
  CarouselCarsItemDescription,
  CarouselCarsItemImage,
  CarouselCarsItemTitle,
  CarouselTitle,
  EmptyMessage,
  InfoContainer,
  OwnerContainer,
  OwnerIcon,
  OwnerName,
  Price,
  Tag,
  TagContainer,
} from "./style";
import { Button } from "../Button";
import { IAdvert } from "../../contexts/Adverts/interfaces";
import { useContext, useEffect, useState } from "react";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/User/UserContext";
import { ModalComponent } from '../ModalEdit'

interface ICarouselCarros {
  title: string;
  mock?: IAdvert[];
  name: boolean;
  adminView: boolean;
  refNav?: React.MutableRefObject<null>;
  listType: string;
}

export const CarrosselCarrosMotos = ({title,name,adminView,refNav,listType,}: ICarouselCarros) => {
  const { advertsList, getAdvertList, isFetching, getAdvertsByUser } =
    useContext(AdvertsContext);

  const { userData, isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
    if (isLoggedIn && adminView) {
      getAdvertsByUser(userData?.id);
    } else getAdvertList();
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(advertsList);
  }, [advertsList]);

  const [modal, setModal] = useState(false);

  return (
    <CarouselCarsContainer ref={refNav}>
      {modal && <ModalComponent handleModal={setModal}></ModalComponent>}

      <CarouselTitle>{title}</CarouselTitle>
      <CarouselCars>
        {!isFetching &&
          (advertsList[listType]?.length === 0 ? (
            <EmptyMessage>
              Não há {title.toLowerCase()} nessa lista.
            </EmptyMessage>
          ) : (
            <>
              <Swiper slidesPerView={"auto"} spaceBetween={24}>
                {advertsList[listType]?.map((car, index) => (
                  <SwiperSlide key={index}>
                    <CarouselCarsItem key={index}>
                      <Link to={`/product/${car.id}`}>
                        <CarouselCarsImageContainer>
                          <CarouselCarsItemImage src={car.coverImage} />
                        </CarouselCarsImageContainer>
                      </Link>
                      <CarouselCarsItemDeatils>
                        <Link to={`/product/${car.id}`}>
                          <CarouselCarsItemTitle>
                            {car.title}
                          </CarouselCarsItemTitle>
                        </Link>
                        <Link to={`/product/${car.id}`}>
                          <CarouselCarsItemDescription>
                            {car.description}
                          </CarouselCarsItemDescription>
                        </Link>
                        <OwnerContainer>
                          <OwnerIcon backgroundColor={"random8"}>
                            {car.user?.name[0]}
                          </OwnerIcon>
                          <OwnerName>{car.user?.name}</OwnerName>
                        </OwnerContainer>
                        <InfoContainer>
                          <TagContainer>
                            <Tag>{car.year}</Tag>
                            <Tag>{car.mileage}</Tag>
                          </TagContainer>
                          <Price>
                            R$ {car.price.split(".")[0]},
                            {car.price.split(".")[1]}
                          </Price>
                        </InfoContainer>
                        {adminView && (
                          <ButtonWrapper>
                            <Button
                              textStyle="button-big-text"
                              content="Editar"
                              borderColor="grey1"
                              color="grey1"
                              onClick={() => setModal(true)}
                            />
                            <Button
                              textStyle="button-big-text"
                              content="Ver como"
                              borderColor="grey1"
                              color="grey1"
                              onClick={() => {
                                navigate(`/product/${car.id}`);
                              }}
                            />
                          </ButtonWrapper>
                        )}
                      </CarouselCarsItemDeatils>
                    </CarouselCarsItem>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ))}
      </CarouselCars>
    </CarouselCarsContainer>
  );
};
