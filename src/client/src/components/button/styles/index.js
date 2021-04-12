import styled from "styled-components";
import { CustomSize, fontSize, color } from "src/values";

export const CustomButton = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "5px")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "25px"};
  background-color: ${(props) => props.bgColor || color.crusta};
  color: ${(props) => props.color || color.white};
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "25px"};
  text-decoration: none;
  cursor: pointer;
  ${({ border }) =>
    border &&
    `
    border: 1px solid ${color.mercury};
  `}
  a {
    text-decoration: none;
    color: ${color.white};
    cursor: pointer;
  }
`;
