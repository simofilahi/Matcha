import styled from "styled-components";
import { color, fontSize, CustomSize } from "src/values";

export const Conatiner = styled.div`
  width: ${(props) => props.width || "350px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Male = styled.div`
  margin: 5px;
  border: 1.5px solid ${color.wildSand};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "35px"};
  cursor: pointer;
  &:hover {
    border: 1.5px solid ${color.electricViolet};
  }
`;

export const Female = styled.div`
  margin: 5px;
  border: 1.5px solid ${color.wildSand};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: ${(props) => props.height || "35px"};
  &:hover {
    border: 1.5px solid ${color.electricViolet};
  }
`;

export const Col = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MaleText = styled.span`
  font-size: ${CustomSize(fontSize.small, 4)};
  color: ${color.Boulder};
`;

export const FemaleText = styled.span`
  font-size: ${CustomSize(fontSize.small, 4)};
  color: ${color.Boulder};
`;

export const Emoji = styled.div`
  font-size: ${fontSize.medium};
  padding: 2px;
  padding-right: 10px;
`;

export const MoreChoice = styled.div`
  margin: 5px;
  border: 1.5px solid ${color.wildSand};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "35px"};
  cursor: pointer;
  &:hover {
    border: 1.5px solid ${color.electricViolet};
  }
`;

export const ChoiceText = styled.span`
  font-size: ${CustomSize(fontSize.small, 4)};
  color: ${color.Boulder};
`;
