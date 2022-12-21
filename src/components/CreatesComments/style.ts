import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 20px;
`

export const CommentsHeader = styled.div`
    display: flex;
    gap: 10px;
`

export const Initials = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.brand1};
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.text["body-2-500"]}
    width: 32px;
    height: 32px;
    border-radius: 15px;
`

export const Name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.theme.typography.text["body-2-500"]}
`

export const Comments = styled.input`
    display: flex;
    border: 1.5px solid ${(props) => props.theme.colors.grey7};
    border-radius: 4px;
    height: 128px;
    padding: 10px;
    
    &::placeholder{
        ${(props) => props.theme.typography.text["input-placeholder"]}
        position: relative;
        top: -30px;
        width: 200px;
        white-space: pre-wrap;
        /* overflow: hidden;
        text-overflow: ellipsis; */
    }
`

export const RecomendationContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 8px;
`

export const Recomendation = styled.p`
    color: ${(props) => props.theme.colors.grey3};
    background:${(props) => props.theme.colors.grey7};
    border-radius: 15px;
    padding: 5px;
`


