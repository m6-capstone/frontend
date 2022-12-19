import styled from 'styled-components'

export const Container = styled.div`
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 36px 44px;
        background-color: ${(props) => props.theme.colors.grey.grey10};
        
        h3{
            color: ${(props) => props.theme.colors.grey.grey1};
        }
        
        p{
            color: ${(props) => props.theme.colors.grey.grey2};
        }
    }

    @media (max-width: 2650px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 36px 44px;
        background-color: ${(props) => props.theme.colors.grey.grey10};
        
        h3{
            color: ${(props) => props.theme.colors.grey.grey1};
        }
        
        p{
            color: ${(props) => props.theme.colors.grey.grey2};
        }
    } 
`