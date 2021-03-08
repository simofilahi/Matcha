import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1020px;
  max-width: 1020px;
`;

NavBar.Title = styled.h1`
  color: #ff8d35;
  font-weight: bold;
  font-size: 32px;
  line-height: 1.2;
  padding: 20px 10px;
`;

NavBar.Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
`;

NavBar.Icon = styled.i`
  color: #6d7c85;
  padding: 0px 20px;
  font-size: 26px;
  cursor: pointer;
  &:hover {
    color: #ff8d35;
  }
`;

NavBar.LeftItem = styled.div`
  display: flex;
  align-items: center;
`;

NavBar.RightItem = styled.div`
  display: flex;
  align-items: center;
`;

NavBar.Avatar = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #f9f9f9;
`;

export const Wrapper = styled.div``;
