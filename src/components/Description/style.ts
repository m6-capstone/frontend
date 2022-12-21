import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 36px 44px;
    background-color: ${(props) => props.theme.colors.grey10};
`
export const Subtitle = styled.h3`
    color: ${(props) => props.theme.colors.grey1};
    ${(props) => props.theme.typography.heading["heading-6-600"]};
`
export const Text = styled.p`
    color: ${(props) => props.theme.colors.grey2};
    ${(props) => props.theme.typography.text["body-1-400"]};
`
