import React from 'react';
import Header from '../header';
import {
    Container
} from './styles/index';

const Home = ({props, children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

Home.Header = ({props, children}) => {
    return (
        <Header />
    );
}

export default Home;