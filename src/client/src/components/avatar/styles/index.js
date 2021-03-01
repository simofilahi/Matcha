import styled from "styled-components";
import PropTypes from "prop-types";
import image from "./user.jpeg";

export const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 100%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 5px;
  border: ${({ active, borderColor }) =>
    active ? `2px solid ${borderColor}` : ""};
`;

Container.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  active: PropTypes.bool,
};
