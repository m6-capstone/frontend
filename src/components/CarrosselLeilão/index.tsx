import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import clock from "../../assets/clock.svg";
import { MdArrowForward } from "react-icons/md";

import {
  Caroussel,
  CarousselContainer,
  CarousselItem,
  CarousselTitle,
  ClockText,
  Data,
  InfoContainer,
  ItemButton,
  ItemDeatils,
  ItemDescription,
  ItemImage,
  ItemTitle,
  OwnerContainer,
  OwnerIcon,
  OwnerName,
  Price,
  Tag,
  TagContainer,
  Timer,
} from "./style";
import { carrosLeilao } from "../../mocks";
import { Button } from "../Button";

export interface ICarrossel {
  name: boolean;
  adminView: boolean;
  refNav?: React.MutableRefObject<null>;
}

export const CarrosselLeilão = ({ name, adminView, refNav }: ICarrossel) => {
  return (
    <CarousselContainer ref={refNav}>
      {name && <CarousselTitle>Leilão</CarousselTitle>}
      <Caroussel>
        <Swiper slidesPerView={"auto"} spaceBetween={24} className="mySwiper">
          {carrosLeilao.map((car, index) => (
            <SwiperSlide key={index}>
              <CarousselItem>
                <ItemImage src={car.image} />
                <ItemDeatils>
                  <Timer>
                    <img src={clock} />
                    <ClockText>01:58:00</ClockText>
                  </Timer>
                  <Data>
                    <ItemTitle>{car.title}</ItemTitle>
                    <ItemDescription>{car.description}</ItemDescription>
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
                  </Data>
                </ItemDeatils>
              </CarousselItem>
              <ItemButton>
                {adminView ? (
                  <>
                    <Button
                      textStyle="button-big-text"
                      content="Editar"
                      borderColor="grey10"
                      color="grey10"
                    />
                    <Button
                      textStyle="button-big-text"
                      content="Ver"
                      borderColor="grey10"
                      color="grey10"
                    />
                  </>
                ) : (
                  <>
                    <span>Acessar página do leilão</span>
                    <MdArrowForward size="1.5em" />
                  </>
                )}
              </ItemButton>
            </SwiperSlide>
          ))}
        </Swiper>
      </Caroussel>
    </CarousselContainer>
  );
};
