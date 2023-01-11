import styled from "styled-components";

export const ProfileAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlueBackground = styled.div`
  background-color: ${(p) => p.theme.colors.brand1};
  height: 331px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  position: absolute;
  width: 100%;
  /* z-index: -99; */
`;
export const GreyBackground = styled.div`
  background-color: ${(p) => p.theme.colors.grey8};
  height: 331px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Profile = styled.div`
  margin-top: 65px;
  background-color: ${(p) => p.theme.colors.grey10};
  height: 461px;
  width: calc(100% - 30px);
  /* position: relative;
  top: 20%;
  left: 50%; */
  /* margin: 0 auto; */
  /* margin-top: 65px; */
  padding: 40px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;

  position: relative;

  button {
    width: fit-content;
  }

  border-radius: 4px;

  @media (min-width: 768px) {
    width: 77.5%;
    max-width: 1240px;
    max-height: 406px;
  }
`;
export const Icon = styled.div`
  background-color: ${(p) => p.theme.colors.brand1};
  padding: 30px 25px;
  width: fit-content;

  border-radius: 100%;
  /* box-sizing: border-box; */
  ${(props) => props.theme.typography.text["body-2-400"]}
  color: ${(p) => p.theme.colors.white};

  /* display: flex;
  align-items: center;
  justify-content: center; */

  font-size: 36px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
`;

export const ProfileTitle = styled.span`
  ${(props) => props.theme.typography.heading["heading-6-600"]}
`;

export const ProfileTag = styled.span`
  ${(p) => p.theme.typography.text["body-2-500"]};

  color: ${(p) => p.theme.colors.brand1};
  background-color: ${(p) => p.theme.colors.brand4};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const ProfileDescription = styled.span`
  ${(p) => p.theme.typography.text["body-1-400"]};
  color: ${(p) => p.theme.colors.grey2};
  text-align: justify;
`;
