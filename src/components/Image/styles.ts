import styled from "styled-components";

export const Container = styled.div` 
    width: 520px;
    height: 354px;
    min-width: 320px;
    min-height: 354px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 34px 34px 16px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 5px 5px 0px 0px;
`

export const ModalTitle = styled.h3`
    ${(props) => props.theme.typography.heading["heading-7-500"]};
`

export const IconCloseButton = styled.button`
    color: ${(props) => props.theme.colors.grey4};
    font-size: 18px;
    font-weight: bold;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    padding: 27px 7px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;
    width: 466px;
    height: 239px;
    background-color: ${(props) => props.theme.colors.grey7};
    border-radius: 4px;
    min-width: 320px;
`

export const Image = styled.img`
    width: 380px;
    height: 125px;
`
