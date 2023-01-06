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

interface ICarouselCarros {
  title: string;
  mock: {
    image: string;
    title: string;
    description: string;
    owner: string;
    iconColor: string;
    tags: string[];
    price: string;
  }[];
  name: boolean;
  adminView: boolean;
  refNav?: React.MutableRefObject<null>;
}

export const CarrosselCarrosMotos = ({
  title,
  mock,
  name,
  adminView,
  refNav,
}: ICarouselCarros) => {
  return (
    <CarouselCarsContainer ref={refNav}>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselCars>
        <Swiper slidesPerView={"auto"} spaceBetween={24} className="mySwiper">
          {mock.map((car, index) => (
            <SwiperSlide key={index}>
              <CarouselCarsItem>
                <CarouselCarsImageContainer>
                  <CarouselCarsItemImage src={car.image} />
                </CarouselCarsImageContainer>
                <CarouselCarsItemDeatils>
                  <CarouselCarsItemTitle>{car.title}</CarouselCarsItemTitle>
                  <CarouselCarsItemDescription>
                    {car.description}
                  </CarouselCarsItemDescription>
                  <OwnerContainer>
                    <OwnerIcon backgroundColor={car.iconColor}>
                      {car.owner[0]}
                    </OwnerIcon>
                    <OwnerName>{car.owner}</OwnerName>
                  </OwnerContainer>
                  <InfoContainer>
                    <TagContainer>
                      {car.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </TagContainer>
                    <Price>{car.price}</Price>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselCars>
    </CarouselCarsContainer>
  );
};
