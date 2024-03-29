import styled from "styled-components";
import { color, device, fontSize, CustomSize, rgbaColor } from "src/values";

// BUTTON AND ICON CONTAINER
export const ButtonIC = styled.div`
  /* MOBILE SCREEN */
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: ${(props) => (props.width ? props.width : "200px")};
  text-decoration: none;
  height: ${(props) => props.height || "25px"};
  background-color: ${(props) => props.bgColor || color.crusta};
  color: ${(props) => props.color || color.white};
  border-radius: 8px;
  font-size: ${CustomSize(fontSize.small, 6)};
  ${({ border }) =>
    border &&
    `
    border: 1px solid ${color.mercury};
  `}
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
  /* box-shadow: 5px 5px 10px
    ${(props) =>
    props.shadowColor ? props.shadowColor : rgbaColor.electricViolet()}; */
`;
