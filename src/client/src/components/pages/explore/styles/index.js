import styled from "styled-components";
import image from "./user.jpeg";
import { color } from "src/values";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const FlexContainer = styled.div`
  background-color: ${color.white};
  max-width: 1024px;
  width: 920px;
  height: 80vh;
  display: flex;
  border: 1px solid ${color.mercury};
  border-radius: 5px;
  box-shadow: 1px 2px 50px 1px #e9e9e9;
`;

export const UserPhotos = styled.div`
  flex: 65%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

export const InteractionRow = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`;

export const ReactionsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
`;

export const Like = styled.div`
  flex: 1;
  margin: 8px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: margin;
  :hover {
    transform: scale(1.1) perspective(1px);
  }
`;

export const Dislike = styled.div`
  flex: 1;
  border-radius: 50%;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: margin;
  background-color: ${color.white};
  :hover {
    transform: scale(1.1) perspective(1px);
  }
`;

export const UserInfosContainer = styled.div`
  flex: 35%;
  display: flex;
  flex-direction: column;
`;

export const UserInfos = styled.div`
  height: 10%;
  padding-left: 10px;
  padding-top: 10px;
`;

export const UserName = styled.div`
  padding-left: 10px;
  padding-top: 10px;
`;

export const CityName = styled.div`
  padding-left: 10px;
  padding-top: 10px;
`;

export const PersonalInfos = styled.div`
  flex: 1;
`;

export const AvatarContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarContainerChild = styled.div`
  margin: 5px;
`;

export const UserCardContainer = styled.div``;
