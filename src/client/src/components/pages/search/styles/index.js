import styled from "styled-components";
import image from "./user.jpeg";
import { color, fontSize } from "src/values";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const GirdContainer = styled.div`
  width: 1020px;
  max-width: 1020px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px 10px;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
  grid-template-columns: auto auto;
  padding-bottom: 5px;
`;

export const UserName = styled.div`
  grid-column: 1/3;
  padding-left: 10px;
  color: ${color.white};
`;

export const InteractionRow = styled.div`
  display: none;
`;

export const GridItem = styled.div`
  background-color: white;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover ${UserInfoContainer} {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:hover ${InteractionRow} {
    width: 100%;
    height: 50px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${color.white};
    display: flex;
  }
`;

export const UserPhotosInfo = styled.div`
  display: flex;
  color: ${color.white};
  justify-content: flex-end;
  align-items: center;
`;

export const IconWrapper = styled.div`
  padding-right: 10px;
  padding-left: 5px;
`;

export const FlexIconWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const PhotosCount = styled.div`
  color: ${color.white};
  font-size: ${fontSize.small};
  text-align: center;
`;

export const CityName = styled.div`
  padding-left: 10px;
  color: ${color.white};
`;
