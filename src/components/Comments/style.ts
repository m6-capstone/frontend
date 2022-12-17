import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 28px;
    gap: 24px;
    background-color: ${(props) => props.theme.colors.grey.white};
    
    .comments__title{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: ${(props) => props.theme.colors.grey.grey1};
    }
    
    .comments__container{
        display: flex;
        align-items: center;
        gap: 24px;
    }
    
    .comments__avatar{
        display: flex;
        text-align:  center;
        align-items: center;
        justify-content: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 0px;
        color: ${(props) => props.theme.colors.grey.white};
        background-color: ${(props) => props.theme.colors.random.random9};
        border-radius: 15px;
        width: 30px;
        height: 30px;
    }
    
    .comments__owner{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.grey.grey1};
    }
    
    .comments__date{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.grey.grey3};
    }
    
    .comments{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.grey.grey2};
    }
`