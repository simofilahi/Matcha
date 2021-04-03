import styled from "styled-components";
import { color, CustomSize, fontSize } from "src/values";

export const Wrapper = styled.div`
  width: ${(props) => props.width || "350px"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
`;

export const BirthDayText = styled.span`
  width: 100%;
  margin-left: 15px;
  font-size: ${CustomSize(fontSize.small, 4)};
  color: ${color.Boulder};
`;

export const Day = styled.div`
  flex: 1;
  height: ${(props) => props.height || "35px"};
  border-radius: 8px;
  margin: 5px;
  border: 1.5px solid ${color.wildSand};
  outline-style: none;
  display: flex;
  align-items: center;
  padding-left: 8px;
  &::visited {
    border: 1.5px solid ${color.electricViolet};
  }
`;

export const DayText = styled.span`
  font-size: ${CustomSize(fontSize.small, 4)};
  color: ${color.Boulder};
`;

export const Month = styled.div`
  flex: 1;
  ${(props) => props.height || "35px"};
  border-radius: 8px;
  margin: 5px;
  border: 1.5px solid ${color.wildSand};
`;

export const Year = styled.div`
  flex: 1;
  ${(props) => props.height || "35px"};
  margin: 5px;
  border: 1.5px solid ${color.wildSand};
  border-radius: 8px;
`;

export const Option = styled.span`
  font-size: ${CustomSize(fontSize.small)};
  color: ${color.Boulder};
  padding-left: 5px;
  margin: 5px;
`;

export const OptionContainer = styled.div`
  ${({ open }) =>
    open
      ? `
  height: 200px;
  width: 100%;
  background-color: ${color.white};
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  top: 126px;
  overflow: auto;
  box-shadow: 5px 5px 10px 5px ${color.wildSand};`
      : `display: none`};
`;

export const CustomText = styled.span``;
