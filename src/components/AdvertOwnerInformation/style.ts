import styled from "styled-components";

interface IInitials {
  props: {
    isDesktop: boolean;
  };
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 28px;
  gap: 28px;

  border-radius: 4px;

  background-color: ${(props) => props.theme.colors.grey10};

  button {
    white-space: normal;
    word-wrap: break-word;
  }
`;
export const Name = styled.h3`
  color: ${(props) => props.theme.colors.grey1};
  ${(props) => props.theme.typography.heading["heading-6-600"]};
`;
export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.grey2};
  ${(props) => props.theme.typography.text["body-1-400"]};
`;

export const Initials = styled.span<IInitials>`
  width: 104px;
  height: 104px;
  background-color: ${(props) => props.theme.colors.brand1};
  color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.typography.text["body-2-500"]};
  font-size: 36px;
  line-height: 53px;
  ${(p) =>
    p.props.isDesktop
      ? ""
      : {
          "font-size": "26.6538px",
          "line-height": "39px",
          width: "77px",
          height: "77px",
        }}
`;
