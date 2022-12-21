import { ButtonContainer } from "./style";

export interface IButton {
  backgroundColor?: string;
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  borderColor?: string;
  textStyle: string;
  width?: string;
  height?: string;
  padding?: string;

  content: string;
}

export const Button = ({
  backgroundColor,
  color,
  type,
  onClick,
  borderColor,
  textStyle,
  content,
  width,
  height,
  padding,
}: IButton) => {
  return (
    <ButtonContainer
      props={{ backgroundColor, color, borderColor, textStyle, width, height, padding }}
      onClick={onClick}
      type={type}
    >
      {content}
    </ButtonContainer>
  );
};
