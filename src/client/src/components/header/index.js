import React from "react";
import { HeaderContainer, NavBar } from "./styles";
import { Link } from "react-router-dom";
import { LIKES, CHAT, EXPLORE, VIEW, SEARCH } from "src/constants";
import LikesPage from "src/components/pages/like";

const Header = ({ props, children }) => {
  return (
    <HeaderContainer>
      <NavBar>
        <NavBar.LeftItem>
          <NavBar.Title>Matcha</NavBar.Title>
          <NavBar.Menu>
            <Link to={EXPLORE}>
              <NavBar.Icon className="far fa-thumbs-up"></NavBar.Icon>
            </Link>
            <Link to={SEARCH}>
              <NavBar.Icon className="fas fa-th"></NavBar.Icon>
            </Link>
            <Link to={CHAT}>
              <NavBar.Icon className="far fa-comment"></NavBar.Icon>
            </Link>
            <Link to={LIKES}>
              <NavBar.Icon className="far fa-heart"></NavBar.Icon>
            </Link>
            <Link to={VIEW}>
              <NavBar.Icon className="far fa-eye"></NavBar.Icon>
            </Link>
          </NavBar.Menu>
        </NavBar.LeftItem>
        <NavBar.RightItem>
          <NavBar.Avatar></NavBar.Avatar>
          <NavBar.Menu>
            <NavBar.Icon className="far fa-bell"></NavBar.Icon>
          </NavBar.Menu>
        </NavBar.RightItem>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
