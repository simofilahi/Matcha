import styled from "styled-components";
import { color } from "src/";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 350px;
  width: 600px;
  background-color: ${color.white};
  z-index: 100;
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  align-self: center;
  border-radius: 8px;
`;
