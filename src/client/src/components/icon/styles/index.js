import styled from "styled-components";
import { color, iconSize, device } from "src/values";

export const IC = styled.i`
  /* MOBILE SCREEN */
  flex: 1;
  color: ${(props) => (props.color ? props.color : color.Boulder)};
  font-size: ${(props) => props.size};

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: ${(props) => props.size};
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: ${(props) => props.size};
  }
`;
