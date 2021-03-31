import styled from "styled-components";
import { color } from "src/values";

export const CustomButton = styled.div`
  margin: 10px;
  padding: 11px 28px;
  height: ${(props) => props.height || "25px"};
  background-color: ${(props) => props.bgColor || color.crusta};
  color: ${(props) => props.color || color.white};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  a {
    text-decoration: none;
    color: ${color.white};
    cursor: pointer;
  }
`;
