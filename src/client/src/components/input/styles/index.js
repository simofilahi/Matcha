import styled from "styled-components";
import { color, placeholder } from "src/values";

export const PlaceHolderText = styled.span``;

export const Wrapper = styled.input`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "380px"};
  margin: 5px;
  outline-style: none;
  border: 1.5px solid ${color.wildSand};
  &:hover {
    border: 1.5px solid ${color.electricViolet};
  }
  border-radius: 8px;
  padding-left: 10px;
  color: ${color.Boulder};
  display: flex;
  align-items: center;
  /* &:hover {
    ${PlaceHolderText} {
      margin-bottom: 45px;
      background-color: white;
      padding: 5px;
    }
  } */
`;
