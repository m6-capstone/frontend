import styled from "styled-components";

export const Container = styled.div`
   
    @media (max-width: 2560px){
        .welcome{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 20px;
            background-color: ${(props) => props.theme.colors.brand.brand2};    
            height: 100vh;
        }
        
        .welcome__title{
            color: ${(props) => props.theme.colors.grey.white};
            font-family: 'Lexend';
        }

        .welcome__paragraph{
            color: ${(props) => props.theme.colors.grey.white};
            font-family: 'Inter';
            font-size: 130%
        }
        
        .welcome__container{
            display: flex;
            gap: 20px;
        }
        
        .welcome__button{
            font-family: 'Inter';
            padding: 20px 28px;
            width: 256px;
            font-weight: bold;
            border: 1.5px solid ${(props) => props.theme.colors.grey.grey10};
            border-radius: 4px;
            background-color: transparent;
            color: ${(props) => props.theme.colors.grey.white};
        }

        .welcome__button:hover{
            cursor: pointer;
        }
    }

    @media (max-width: 768px){
        .welcome{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 20px;
            background-color: ${(props) => props.theme.colors.brand.brand2};    
            height: 100vh;
        }
        
        .welcome__title{
            color: ${(props) => props.theme.colors.grey.white};
            font-family: 'Lexend';
        }

        .welcome__paragraph{
            color: ${(props) => props.theme.colors.grey.white};
            font-family: 'Inter';
            font-size: 80%;
        }
        
        .welcome__container{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .welcome__button{
            padding: 6px 28px;
            width: 270px;
            border: 1.5px solid ${(props) => props.theme.colors.grey.grey10};
            border-radius: 4px;
            background-color: transparent;
            color: ${(props) => props.theme.colors.grey.white};
            font-weight: bold;
            font-family: 'Inter';
        }

        .welcome__button:hover{
            cursor: pointer;
        }
    }
`