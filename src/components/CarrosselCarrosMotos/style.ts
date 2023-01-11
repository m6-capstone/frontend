import styled from "styled-components";

interface IIconColor {
  backgroundColor: string;
}

export const CarouselCarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 38px 0;
  gap: 38px;

  @media (min-width: 768px) {
    padding: 100px 0;
    gap: 40px;
  }
`;

export const CarouselTitle = styled.h2`
  color: ${(props) => props.theme.colors.grey0};
  ${(props) => props.theme.typography.heading["heading-5-600"]}
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 60px;
  }
`;

export const CarouselCars = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 16px;

    @media (min-width: 768px) {
      padding: 0 60px;
    }
  }

  .swiper-slide {
    width: 312px;
  }
`;

export const CarouselCarsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CarouselCarsImageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey7};
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    border: 3px solid ${(props) => props.theme.colors.brand2};
  }
`;

export const CarouselCarsItemImage = styled.img`
  height: 100%;
  width: 84%;
  max-width: 100%;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }
`;

export const CarouselCarsItemDeatils = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 17px 0;
`;

export const CarouselCarsItemTitle = styled.h2`
  ${(props) => props.theme.typography.heading["heading-7-600"]}
  color: ${(props) => props.theme.colors.grey1};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CarouselCarsItemDescription = styled.h3`
  ${(props) => props.theme.typography.text["body-2-400"]}
  color: ${(props) => props.theme.colors.grey2};
  text-overflow: ellipsis;
  overflow: hidden;
  height: 48px;
`;

export const OwnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OwnerIcon = styled.span<IIconColor>`
  background-color: ${(props) =>
    props.theme.colors[props.backgroundColor] || props.theme.colors.brand1};
  padding: 4px 11px;
  border-radius: 150px;
  ${(props) => props.theme.typography.text["body-2-500"]}
  color: ${(props) => props.theme.colors.white};
`;

export const OwnerName = styled.span`
  ${(props) => props.theme.typography.text["body-2-500"]}
  color: ${(props) => props.theme.colors.grey2};
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Tag = styled.span`
  color: ${(props) => props.theme.colors.brand1};
  background-color: ${(props) => props.theme.colors.brand4};
  padding: 4px 8px;
  border-radius: 4px;
  ${(props) => props.theme.typography.text["body-2-500"]}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.heading["heading-7-500"]}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
