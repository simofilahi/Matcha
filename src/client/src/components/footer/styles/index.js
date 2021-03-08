import styled from "styled-components";
import { color, device } from "src/values";

export const FooterWrapper = styled.footer`
  /* MOBILE SCREEN */
  display: none;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const FooterList = styled.ul`
  padding: 10px;
`;

export const FooterListItem = styled.li`
  display: inline-block;
  padding: 10px;
`;

export const LinkContainer = styled.div`
  color: ${color.white};
  text-decoration: none;

  a {
    text-decoration: none !important;
    color: ${color.white};
    font-size: 1rem;
    cursor: pointer;
  }
`;
