import styled from "styled-components";
import { color } from "src/values";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "25px"};
  color: ${(props) => props.color || color.white};
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "25px"};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    border: 1.5px solid ${color.electricViolet};
  }
  border: 1px solid ${color.mercury};
`;

export const Input = styled.input`
  height: 99%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: none;
  outline: none;
  padding-left: 10px;
`;

export const IconContainer = styled.div`
  /* background-color: blue; */
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
