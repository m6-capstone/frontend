import styled from "styled-components";

export interface IButtonContainer {
  props: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    textStyle: string;
    width?: string;
    height?: string;
  };
}

export const ButtonContainer = styled.button<IButtonContainer>`
  width: ${(p) => p.props.width};
  height: ${(p) => p.props.height};

  padding: 24px 28px;

  ${(p) => p.props.textStyle && p.theme.typography.text[p.props.textStyle]}

  background-color: ${(p) => (p.props.backgroundColor && p.theme.colors[p.props.backgroundColor]) || "unset"};

  border: ${(p) => (p.props.borderColor && `1.5px solid ${p.theme.colors[p.props.borderColor]}`) ||"unset"};

  border-radius: 4px;

  color: ${(p) => p.props.color && p.theme.colors[p.props.color]}
`;
