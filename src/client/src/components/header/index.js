import React from 'react';
import {
    HeaderContainer,
    Wrapper,
    NavBar,
} from './styles'

const Header = ({props, children}) => {
    return (
        <HeaderContainer>
                <NavBar>
                    <NavBar.LeftItem>
                        <NavBar.Title>
                            Matcha
                        </NavBar.Title>
                        <NavBar.Menu>
                            <NavBar.Icon className="fab fa-facebook fa-2x">

                            </NavBar.Icon>
                            <NavBar.Icon className="fab fa-facebook fa-2x">

                            </NavBar.Icon>
                            <NavBar.Icon className="fab fa-facebook fa-2x">

                            </NavBar.Icon>
                            <NavBar.Icon className="fab fa-facebook fa-2x">

                            </NavBar.Icon>
                            <NavBar.Icon className="fab fa-facebook fa-2x">

                            </NavBar.Icon>
                        </NavBar.Menu>
                    </NavBar.LeftItem>
                    <NavBar.RightItem>
                        <NavBar.Avatar>
                           
                        </NavBar.Avatar>
                        <NavBar.Menu>
                                <NavBar.Icon className="fab fa-facebook fa-2x">

                                </NavBar.Icon>
                        </NavBar.Menu>  
                    </NavBar.RightItem>
                </NavBar>
         </HeaderContainer>
    );
}

export default Header;