import styled from 'styled-components'

export const Container = styled.div`
    @media (max-width: 2560px){
        .footer{
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 30px;
            background-color: ${(props) => props.theme.colors.grey.grey0};
            height: 100px;
        }
        
        .footer__img{
            width: 100px;
        }
        
        .footer__span{
            color: ${(props) => props.theme.colors.grey.white};
        }
        
        .footer__button{
            background-color: ${(props) => props.theme.colors.grey.grey1};
            color: ${(props) => props.theme.colors.grey.white};
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 5px 5px 5px 5px;
        }
    }

    @media (max-width: 768px){
        .footer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            background-color: ${(props) => props.theme.colors.grey.grey0};
            height: 200px;
        }
    
        .footer__img{
            width: 100px;
        }
        
        .footer__span{
            color: ${(props) => props.theme.colors.grey.white};
        }
        
        .footer__button{
            background-color: ${(props) => props.theme.colors.grey.grey1};
            color: ${(props) => props.theme.colors.grey.white};
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 5px 5px 5px 5px;
        }
    }
`