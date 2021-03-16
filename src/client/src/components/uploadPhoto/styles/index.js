import styled from "styled-components";
import { color, fontSize, CustomSize } from "src/values";

// FLEX CONTAINER

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

// UPLOAD PHOTO WRAPPER
export const Wrapper = styled.div`
  height: 140px;
  width: 400px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${color.white};
  border: 3px dotted ${color.wildSand};
  border-radius: 8px;
  cursor: pointer;
`;

// CONTAINER
export const Container = styled.div`
  height: 130px;
  width: 390px;
  background-color: ${color.wildSand};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// UPLOAD PHOTO TEXT
export const UploadText = styled.span`
  color: ${color.Boulder};
  font-size: ${CustomSize(fontSize.small, 2)};
`;

// CUSTOM TEXT
export const CustomText = styled.span`
  text-decoration: underline;
`;

export const PhotosList = styled.div`
  height: 140px;
  width: 400px;
  display: flex;
  align-items: flex-start;
  overflow: auto;
`;

export const Photo = styled.div`
  background-color: red;
  height: 60px;
  width: 60px;
  margin: 10px 2px;
  background-color: ${color.white};
  border: 3px solid ${color.wildSand};
  border-radius: 5px;
`;
