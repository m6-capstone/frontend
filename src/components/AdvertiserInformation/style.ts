import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 40px;
    background-color: ${(props) => props.theme.colors.white};
`

export const Initials = styled.div`
    display: flex;
    text-align:  center;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 104px;
    height: 104px;  
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.random9};
`

export const AdvertiserContainer = styled.div`
    display: flex;  
    align-items: center;
    gap: 10px;
`

export const Name = styled.span`
    color: ${(props) => props.theme.colors.grey1};
    ${(props) => props.theme.typography.heading["heading-6-600"]}
`

export const Label = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.brand4};
    color: ${(props) => props.theme.colors.brand1};
    ${(props) => props.theme.typography.text["body-2-500"]}
`

export const AboutMe = styled.p`
    color: ${(props) => props.theme.colors.grey2};
    ${(props) => props.theme.typography.text["body-1-400"]}

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 160px;
    height: 48px;
    border: 1.5px solid ${(props) => props.theme.colors.brand1};
    background-color: transparent;
    color: ${(props) => props.theme.colors.brand1};
    ${(props) => props.theme.typography.text["button-big-text"]}

    &:hover{
        cursor: pointer;
    }
`