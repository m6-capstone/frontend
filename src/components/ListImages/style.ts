import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 44px;
    gap: 20px;
    width: 440px;
    height: 377px;
`

export const Title = styled.h3`
    ${(props) => props.theme.typography.heading["heading-6-600"]};
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Image = styled.img`
   width: 108px;
    height: 108px;
    background-color: ${(props) => props.theme.colors.grey7};
    border-radius: 4px;
`