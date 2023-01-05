import styled from "styled-components";

interface IAside {
    props: {
        isMobile: boolean;
        isDesktop: boolean;
    };
}

interface IContainer {
    props: {
        isDesktop: boolean;
    };
}

export const GlobalContainer = styled.div`
    display: flex;
    justify-content: space-around ;
`

export const Container = styled.div<IContainer>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    ${(p) => p.props.isDesktop ? {"display":"none"} : ""};
`

export const Main = styled.main`
    width: 752px;
`

export const Aside = styled.aside<IAside>`
    width: 440px;
    ${(p) => p.props.isMobile ? {"display":"none"} : ""};
    ${(p) => p.props.isDesktop ? {"display":"block"} : ""};

`