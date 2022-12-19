import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }

   #root {
       margin: 0 auto;
   }

   ul, li, button {
    all: unset;
   }

   button {
    cursor: pointer;
   }
`;

export const Heading_1_700 = styled.h1`
  color: ${(props) => props.theme.colors.brand.brand1};
  ${(props) => props.theme.typography.heading["heading-1-700"]}
`;

export const Heading_2_600 = styled.h1`
  color: ${(props) => props.theme.colors.brand.brand2};
  ${(props) => props.theme.typography.heading["heading-2-600"]}
`;

export const Heading_3_600 = styled.h1`
  color: ${(props) => props.theme.colors.brand.brand3};
  ${(props) => props.theme.typography.heading["heading-3-600"]}
`;

export const Heading_3_500 = styled.h1`
  color: ${(props) => props.theme.colors.brand.brand4};
  ${(props) => props.theme.typography.heading["heading-3-500"]}
`;

export const Heading_4_600 = styled.h1`
  color: ${(props) => props.theme.colors.feedback.alert1};
  ${(props) => props.theme.typography.heading["heading-4-600"]}
`;

export const Heading_4_500 = styled.h1`
  color: ${(props) => props.theme.colors.feedback.alert2};
  ${(props) => props.theme.typography.heading["heading-4-500"]}
`;

export const Heading_5_600 = styled.h1`
  color: ${(props) => props.theme.colors.feedback.alert3};
  ${(props) => props.theme.typography.heading["heading-5-600"]}
`;

export const Heading_5_500 = styled.h1`
  color: ${(props) => props.theme.colors.feedback.success1};
  ${(props) => props.theme.typography.heading["heading-5-500"]}
`;

export const Heading_6_600 = styled.h1`
  color: ${(props) => props.theme.colors.feedback.success2};
  ${(props) => props.theme.typography.heading["heading-6-600"]}
`;

export const Heading_6_500 = styled.h1`
  color: ${(props) => props.theme.colors.feedback.success3};
  ${(props) => props.theme.typography.heading["heading-6-500"]}
`;

export const Heading_7_600 = styled.h1`
  color: ${(props) => props.theme.colors.random.random2};
  ${(props) => props.theme.typography.heading["heading-7-600"]}
`;

export const Heading_7_500 = styled.h1`
  color: ${(props) => props.theme.colors.random.random10};
  ${(props) => props.theme.typography.heading["heading-7-500"]}
`;

export const Text_body_1_400 = styled.p`
  color: ${(props) => props.theme.colors.grey.grey9};
  ${(props) => props.theme.typography.text["body-1-400"]}
`;
