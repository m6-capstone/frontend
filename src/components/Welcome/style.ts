import styled from "styled-components";

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    background-color: ${(props) => props.theme.colors.brand2};   
    height: 100vh;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;

    @media (min-width: 768px){
        width: 600px;
    }
`
export const Title = styled.h2`
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.heading["heading-3-600"]}
`
export const Text = styled.p`
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.text["body-1-400"]}
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    gap: 20px;
    width: 100%;

    @media (min-width: 768px){
        flex-direction: row;
        width: 350px;
    }
`
export const Button = styled.button`
    padding: 16px 28px;
    width: 90%;
    border-radius: 4px;
    background-color: transparent;
    border: 1.5px solid ${(props) => props.theme.colors.grey10};
    color: ${(props) => props.theme.colors.grey.white};
    ${(props) => props.theme.typography.text["button-big-text"]}

    &:hover{
        cursor: pointer;
    }

`