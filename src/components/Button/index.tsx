import { Children } from "react";
import { ButtonContainer } from "./style";

export interface IButton {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  textStyle: string;
  width?: string;
  height?: string;

  content: string;
  onClick?: () => void
  type?: string;
}

export const Button = ({
  backgroundColor,
  color,
  borderColor,
  textStyle,
  content,
  width,
  height,
}: IButton) => {
  return (
    <ButtonContainer
      props={{ backgroundColor, color, borderColor, textStyle, width, height }}
    >
      {content}
    </ButtonContainer>
  );
};
