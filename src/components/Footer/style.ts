import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    align-items: center;
    gap: 30px;
    background-color: ${(props) => props.theme.colors.grey0};
    height: 100px;
`

export const Image = styled.img`
    width: 100px;
`

export const Span = styled.span`
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.text["body-2-400"]}
`

export const Button = styled.button`
    background-color: ${(props) => props.theme.colors.grey1};
    color: ${(props) => props.theme.colors.grey.white};
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px 5px 5px 5px;
`
