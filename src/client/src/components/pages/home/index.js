import React from "react";
import Header from "src/components/header";
import { Container } from "./styles/index";

const Home = ({ props, children }) => {
  return <Container>{children}</Container>;
};

export default Home;
