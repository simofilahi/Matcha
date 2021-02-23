import styled from 'styled-components';

export const Container = styled.div`

    flex: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(-75deg, #f7b733 0%, #fc4a1a 100%);
    color: white;
`;


export const Wrapper = styled.div`

`;

export const FirstItem = styled.div`
    padding: 20px;
    align-self: flex-start;
`;

FirstItem.Icon = styled.i`
    padding: 10px;
    margin: 5px;
    color: #fb551d;
    background-color: #ffffff;
    border-radius: 100%;
    cursor: pointer;
`

export const SecondItem = styled.div`
    align-self: flex-end;
    max-width: 500px;
    margin-bottom: 300px;
    margin-right: 50px;
`;

SecondItem.Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

SecondItem.FirstPara = styled.p`
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: 1rem;
`;

SecondItem.SecondPara = styled.p`
    margin-bottom: 3rem;
`

SecondItem.Button = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    max-width: 350px;
    text-decoration: none;
    color: white;
    background-color: #4562c7;
    border-radius: 50px;
    cursor: pointer;
`;

SecondItem.ButtonIcon = styled.i`
    background-color: #263b80;
    padding: 8px;
    border-radius: 100%;
`;

SecondItem.ButtonTitle = styled.span`
    align-self: center;
`;

export const ThirdItem = styled.div`
  align-self: flex-start;
  padding: 20px;
`;

ThirdItem.Title = styled.h1`

`;

ThirdItem.Para = styled.p`

`;


