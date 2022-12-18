import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${(props) => props.theme.colors.grey.white};

    .advertiser__initials{
        display: flex;
        text-align:  center;
        align-items: center;
        justify-content: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        line-height: 53px;
        font-size: 36px;
        color: ${(props) => props.theme.colors.grey.white};
        background-color: ${(props) => props.theme.colors.random.random9};
        display: flex;
        text-align:  center;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: 104px;
        height: 104px;
    }
    
    .advertiser__container{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .advertiser__name{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: ${(props) => props.theme.colors.grey.grey1};
    }
    
    .advertiser__label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        padding: 5px;
        background-color: ${(props) => props.theme.colors.brand.brand4};
        color: ${(props) => props.theme.colors.brand.brand1};
    }
    
    .advertiser__about{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: ${(props) => props.theme.colors.grey.grey2};
    }

    .advertiser__button{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        width: 160px;
        height: 48px;
        border: 1.5px solid ${(props) => props.theme.colors.brand.brand1};
        background-color: transparent;
        color: ${(props) => props.theme.colors.brand.brand1};
    }

    .advertiser__button:hover{
        cursor: pointer;
    }
`