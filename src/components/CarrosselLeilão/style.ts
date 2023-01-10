import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

interface IIconColor {
  backgroundColor: string;
}

export const CarousselContainer = styled.div`
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

export const CarousselTitle = styled.h2`
  color: ${(props) => props.theme.colors.grey0};
  ${(props) => props.theme.typography.heading["heading-5-600"]}
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 60px;
  }
`;

export const Caroussel = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 16px;

    @media (min-width: 768px) {
      padding: 0 60px;
    }
  }

  .swiper-slide {
    width: 49.67%;
    min-width: 275px;
    max-width: 735px;
    height: 100%;
  }
`;
export const CarousselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
export const ItemImage = styled.img`
  position: absolute;
  z-index: -9999;
  height: 100%;
  max-width: 100%;
`;

export const ItemDeatils = styled.div`
  width: 100%;
  height: 435px;

  display: flex;
  flex-direction: column;
  gap: 35px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  padding: 33px 22px;

  @media (min-width: 768px) {
    padding: 24px 36px;
    height: 326px;
  }
`;

export const ClockText = styled.span`
  ${(props) => props.theme.typography.heading["heading-7-500"]}
  color: ${(props) => props.theme.colors.grey1};
  padding: 0 6px;
`;

export const Timer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-around;
  width: fit-content;
  padding: 8px;
  border-radius: 32px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemTitle = styled.h2`
  ${(props) => props.theme.typography.heading["heading-6-600"]}
  color: ${(props) => props.theme.colors.grey10};
`;

export const ItemDescription = styled.h3`
  ${(props) => props.theme.typography.text["body-1-400"]}
  color: ${(props) => props.theme.colors.grey5};
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;

  @media (min-width: 768px) {
    white-space: nowrap;
  }
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
  color: ${(props) => props.theme.colors.white};
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

export const ItemButton = styled.button`
  background-color: ${(props) => props.theme.colors.brand1};
  height: 62px;
  padding: 0 24px;
  width: calc(100% - 2 * 24px);
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.text["button-big-text"]}

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0 36px;
    width: calc(100% - 2 * 36px);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.heading["heading-7-500"]}
`;

export const StyledArrowIcon = styled(BsArrowRight)`
  transition: 0.5s;

  .swiper-slide:hover & {
    transform: translateX(10px);
  }
`;
