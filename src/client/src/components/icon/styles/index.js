import styled from "styled-components";
import { color, iconSize, device } from "src/values";

export const IC = styled.i`
  /* MOBILE SCREEN */
  color: ${color.mercury};
  font-size: ${(props) => props.size};
  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: ${iconSize.medium};
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: ${iconSize.large};
  }
`;
