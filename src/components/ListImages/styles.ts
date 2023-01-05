import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 44px;
    gap: 20px;
`

export const Title = styled.h3`
    ${(props) => props.theme.typography.heading["heading-6-600"]};
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const Image = styled.img`
    width: 92px;
    height: 92px;
    background-color: ${(props) => props.theme.colors.grey7};
    border-radius: 4px;
    margin-bottom: 40px;

    @media (min-width: 768px){
        width: 170px;
    }

    @media (min-width: 1360px){
        width: 110px;
    }

`