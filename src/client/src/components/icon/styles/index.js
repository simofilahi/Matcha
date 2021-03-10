import styled from "styled-components";
import { color, iconSize, device } from "src/values";

export const IC = styled.i`
  /* MOBILE SCREEN */
  flex: 1;
  color: ${color.Boulder};
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
