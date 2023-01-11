
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 375px;
    padding: 16px 24px;
    background-color: ${(props) => props.theme.colors.white}
`

export const AdvertHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeaderTitle = styled.h3`
    ${(props) => props.theme.typography.heading["heading-7-500"]};
    color: ${(props) => props.theme.colors.grey1};
`

export const ModalCloseButton = styled.button`
    cursor: pointer;
`

export const AdverTypeTitle = styled.h3`
    ${(props) => props.theme.typography.text["body-2-500"]}
    padding: 16px 0px;
`

export const AdvertType = styled.div`
    ${(props) => props.theme.typography.text["body-2-500"]}
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 10px;
`

export const SubTitle = styled.h3`
    ${(props) => props.theme.typography.text["body-2-500"]}
    padding: 16px 0px;
    
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column ;
    gap: 20px;
    padding: 16px 0px;
`

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const Input = styled.input`
    padding: 10px;
    ${(props) => props.theme.typography.text["input-placeholder"]};
    color: ${(props) => props.theme.colors.grey3};
`

export const VehicleTypeTitle = styled.h3`
    ${(props) => props.theme.typography.text["body-2-500"]};
`

export const VehicleType = styled.div`
    ${(props) => props.theme.typography.text["body-2-500"]}
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 16px 0px;
    gap: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    text-align: center;
    gap: 20px;
    padding: 16px 0px;
`

export const PublishedTitle = styled.h3`
    ${(props) => props.theme.typography.text["body-2-500"]};
`

export const Published = styled.div`
    ${(props) => props.theme.typography.text["body-2-500"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 16px 0px;
    gap: 10px;
`