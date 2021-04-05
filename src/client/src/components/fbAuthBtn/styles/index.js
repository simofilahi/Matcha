import styled from "styled-components";
import { color, fontSize, CustomSize } from "src/values";

export const FbIconContainer = styled.div`
  flex: 1;
`;

export const FbButtonText = styled.span`
  color: ${(props) => (props.color ? props.color : color.black)};
  font-size: ${CustomSize(fontSize.small, 5)};
  text-align: center;
`;
