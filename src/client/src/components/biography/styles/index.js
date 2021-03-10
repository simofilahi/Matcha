import styled from "styled-components";
import { color, CustomSize, fontSize } from "src/values";

export const Wrapper = styled.div`
  height: 200px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const BiographyText = styled.span`
  color: ${color.Boulder};
  font-size: ${CustomSize(fontSize.small, 4)};
  margin-left: 5px;
`;

export const TextArea = styled.textarea`
  border: 1.5px solid ${color.wildSand};
  border-radius: 0.5rem;
  height: 100px;
  outline-style: none;
  margin: 5px;
  :hover {
    border: 1.5px solid ${color.electricViolet};
  }
`;

export const MinCharText = styled.span`
  color: ${color.Boulder};
  font-size: ${CustomSize(fontSize.small)};
  align-self: flex-end;
`;
