import styled from 'styled-components';

interface IImage{
    props: {
        isTablet: boolean;
    }
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 416px;
`;

export const Image = styled.img<IImage>`
    background-color: ${(props) => props.theme.colors.grey10};
    width: 350px;
    height: 350px;
    border-radius: 4px;
    ${(p) => p.props.isTablet ? {"width":"652px", "height":"355px"} : ""};
`;