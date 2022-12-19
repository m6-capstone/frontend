import { ButtonContainer } from "./style";

export interface IButton {
  backgroundColor?: string;
  borderColor?: string;
  textStyle: string;
  width?: string;
  height?: string;

  content: string;
}

export const Button = ({
  backgroundColor,
  borderColor,
  textStyle,
  content,
  width,
  height,
}: IButton) => {
  return (
    <ButtonContainer
      props={{ backgroundColor, borderColor, textStyle, width, height }}
    >
      {content}
    </ButtonContainer>
  );
};
