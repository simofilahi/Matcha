import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 50px;
`;
export const FlexContainer = styled.div`
    background-color: #FFFFFF;
    max-width: 1024px;
    width: 1020px;
    height: 80vh;
    display: flex;
    border: 2px solid #E9E9E9;
    border-radius: 5px;
    box-shadow:1px 2px 50px 1px #E9E9E9;
`;

export const RightSection = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`;

export const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const HeaderItem = styled.div`
    height: 60px;
    /* border: 1px solid gray; */
    display: flex;
    border-bottom: 2px solid #E9E9E9; 
`;

export const BodyItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    /* border: 1px solid gray; */
`;

export const Options = styled.div`
    flex: 1;
    display: flex;
`;

export const Option = styled.a`
    padding: 15px 20px;
    cursor: pointer;
    color: #283740;
`;

export const UserInfo = styled.div`
    flex:1;
    display: flex;
`;

export const ChatList = styled.div`
   flex: 100px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #E9E9E9;
    overflow: auto;
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`;



export const ChatItem = styled.div`
    height: 60px;
    min-height: 60px;
    width: 100%;
    /* background-color: black; */
    margin: 2px 0px;
    border-bottom: 2px solid #E9E9E9;
    display: flex;
`;

export const ChatListSection = styled.div`
flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ChatSearchContainer = styled.div`
    margin: 10px;
    display: flex;
    border: 1.5px solid #E9E9E9;
    outline-color: #80BBFF;
    border-radius: 5px;
`;

export const ChatSearchIcon = styled.i`
    padding: 10px;
    padding-right: 25px;
    width: 20px;
    font-size: 12px;
    color: #C1C1C1;
`;

export const ChatSearch = styled.input`
flex: 1;
height: 35px;
border-radius: 1px;
outline: none;
border: none;
/* border-color: #F1F1F1; */
`;

export const Avatar = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

Avatar.Img = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background-color: #F9F9F9;
    align-self: center;
`;

export const UserName = styled.div`
    flex: 3;
    padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const MessagesContent = styled.div`
flex: 1;
`;

export const MessageInput = styled.input`
    width: 100%;
    height: 100px;
    border: none;
    border-top: 2px solid #E9E9E9;

`;



