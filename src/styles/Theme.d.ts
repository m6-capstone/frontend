import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    typography: ITypography;
  }
}

interface IColors {
  brand: IColorsBrand;
  "grey-scale": IColorsGreyScale;
  feedback: IColorsFeedback;
  random: IColorsRandom;
}

interface IColorsBrand {
  brand1: string;
  brand2: string;
  brand3: string;
  brand4: string;
}

interface IColorsGreyScale {
  grey0: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  grey8: string;
  grey9: string;
  grey10: string;
  "white-fixed": string;
}

interface IColorsFeedback {
  alert1: string;
  alert2: string;
  alert3: string;
  sucess1: string;
  sucess2: string;
  sucess3: string;
}

interface IColorsRandom {
  random1: string;
  random2: string;
  random3: string;
  random4: string;
  random5: string;
  random6: string;
  random7: string;
  random8: string;
  random9: string;
  random10: string;
  random11: string;
  random12: string;
}

interface ITypography {
  heading: {
    "heading-1-700": ITypographyProperties;
    "heading-2-600": ITypographyProperties;
    "heading-3-600": ITypographyProperties;
    "heading-3-500": ITypographyProperties;
    "heading-4-600": ITypographyProperties;
    "heading-4-500": ITypographyProperties;
    "heading-5-600": ITypographyProperties;
    "heading-5-500": ITypographyProperties;
    "heading-6-600": ITypographyProperties;
    "heading-6-500": ITypographyProperties;
    "heading-7-600": ITypographyProperties;
    "heading-7-500": ITypographyProperties;
  };
  text: {
    "body-1-400": ITypographyProperties;
    "body-1-600": ITypographyProperties;
    "body-2-400": ITypographyProperties;
    "body-2-500": ITypographyProperties;
    "button-big-text": ITypographyProperties;
    "button-medium-text": ITypographyProperties;
    "input-placeholder": ITypographyProperties;
    "input-label": ITypographyProperties;
  };
}

interface ITypographyProperties {
  "font-family": string;
  "font-style": string;
  "font-weight": string;
  "font-size": string;
  "line-height": string;
}
