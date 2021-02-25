import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 50px;
`;

export const GirdContainer = styled.div`
    width: 1020px;
    max-width: 1020px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px 10px;
`;

export const GridItem = styled.div`
    background-color: white;
    width: 250px;
    height: 250px;
    border-radius: 10px;
`;

