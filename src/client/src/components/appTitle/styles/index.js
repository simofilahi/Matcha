import { color, fontSize, CustomSize } from "src/values";
import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100%;
  font-size: ${CustomSize(fontSize.large, 20)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.electricViolet};
  letter-spacing: 2px;
  font-weight: 700;
`;
