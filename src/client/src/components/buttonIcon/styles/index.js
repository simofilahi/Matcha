import styled from "styled-components";
import { color, device, fontSize, CustomSize } from "src/values";

// BUTTON AND ICON CONTAINER
export const ButtonIC = styled.div`
  /* MOBILE SCREEN */
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: 200px;
  text-decoration: none;
  height: ${(props) => props.height || "25px"};
  background-color: ${(props) => props.bgColor || color.crusta};
  color: ${(props) => props.color || color.white};
  border-radius: 8px;
  font-size: ${CustomSize(fontSize.small, 6)};
  ::after {
    content: "";
    flex: 1;
  }

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    padding: 8px;
    max-width: 350px;
    color: ${color.white};
    font-size: 1.2rem;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    padding: 8px;
    max-width: 350px;
    color: ${color.white};
    font-size: 1.5rem;
  }
`;
