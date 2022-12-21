import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
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
}

export const CarrosselCarrosMotos = ({ title, mock }: ICarouselCarros) => {
  return (
    <CarouselCarsContainer>
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
                </CarouselCarsItemDeatils>
              </CarouselCarsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselCars>
    </CarouselCarsContainer>
  );
};
