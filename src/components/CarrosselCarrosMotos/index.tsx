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
import { useContext, useEffect } from "react";
import { AdvertsContext } from "../../contexts/Adverts/AdvertsContext";
import { Link } from "react-router-dom";

interface ICarouselCarros {
  title: string;
  mock?: IAdvert[];
  name: boolean;
  adminView: boolean;
  refNav?: React.MutableRefObject<null>;
  listType: string;
}

export const CarrosselCarrosMotos = ({
  title,
  name,
  adminView,
  refNav,
  listType,
}: ICarouselCarros) => {
  const { advertsList, getAdvertList, isLoaded, isEmpty } =
    useContext(AdvertsContext);

  console.log(advertsList);
  useEffect(() => {
    if (!isLoaded) {
      getAdvertList();
    }
  }, []);

  return (
    <CarouselCarsContainer ref={refNav}>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselCars>
        {isLoaded &&
          (isEmpty ? (
            <CarouselCarsItemTitle>
              Não há {title.toLowerCase()} nessa lista.
            </CarouselCarsItemTitle>
          ) : (
            <>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={24}
                className="mySwiper"
              >
                <SwiperSlide>
                  {advertsList[listType]?.map((car, index) => (
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
                            />
                            <Button
                              textStyle="button-big-text"
                              content="Ver como"
                              borderColor="grey1"
                              color="grey1"
                            />
                          </ButtonWrapper>
                        )}
                      </CarouselCarsItemDeatils>
                    </CarouselCarsItem>
                  ))}
                </SwiperSlide>
              </Swiper>
            </>
          ))}
      </CarouselCars>
    </CarouselCarsContainer>
  );
};
