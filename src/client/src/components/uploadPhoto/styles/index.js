import styled from "styled-components";
import { color } from "src/values";

// UPLOAD PHOTO WRAPPER
export const Wrapper = styled.div`
  height: 200px;
  width: 500px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${color.white};
  border: 3px dotted ${color.wildSand};
  border-radius: 0.5rem;
  cursor: pointer;
`;

// CONTAINER
export const Container = styled.div`
  height: 190px;
  width: 490px;
  background-color: ${color.wildSand};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// UPLOAD PHOTO TEXT
export const UploadText = styled.span`
  color: ${color.Boulder};
`;

// CUSTOM TEXT
export const CustomText = styled.span`
  text-decoration: underline;
`;
