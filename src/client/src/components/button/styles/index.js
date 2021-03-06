import styled from "styled-components";
import { color } from "src/values";

export const CustomButton = styled.div`
  align-self: flex-end;
  margin: 20px;
  padding: 11px 28px;
  background-color: #fb7627;
  color: #ffffff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  a {
    text-decoration: none !important;
    color: ${color.white};
  }
`;
