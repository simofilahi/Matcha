import appStore from "src/components/assets/images/app-store.png";
import playStore from "src/components/assets/images/play-store.png";
import styled from "styled-components";
import { device, color } from "src/values";

export const AppStoreLogo = styled.div`
  /* MOBILE SCREEN */
  background-image: url(${appStore});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 233px 76px;
  flex: 1;
  height: 100px;
  max-width: 200px;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    flex: 1;
    background-size: 303px 104px;
    height: 80px;
    max-width: 190px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    flex: 1;
    background-size: 323px 124px;
    height: 100px;
    max-width: 200px;
  }
`;

export const PlayStoreLogo = styled.div`
  /* MOBILE SCREEN */
  background-image: url(${playStore});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 132px 50px;
  height: 100px;
  max-width: 200px;
  flex: 1;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    background-size: 170px 66px;
    height: 80px;
    max-width: 180px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    background-size: 180px 80px;
    height: 100px;
    max-width: 200px;
  }
`;
