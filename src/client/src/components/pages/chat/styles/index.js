import styled from "styled-components";
import { color, fontSize } from "src/values";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const FlexContainer = styled.div`
  background-color: ${color.white};
  max-width: 1024px;
  width: 1020px;
  height: 80vh;
  display: flex;
  border: 1px solid ${color.mercury};
  border-radius: 5px;
  box-shadow: 1px 2px 50px 1px #e9e9e9;
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

export const BodyItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  flex: 1;
  display: flex;
  max-width: 250px;
  height: 100%;
  align-items: center;
`;

export const Option = styled.a`
  flex: 1;
  cursor: pointer;
  color: #283740;
  text-align: center;
`;

export const FriendChatInfoContainer = styled.div`
  justify-items: center;
  align-items: center;
  display: flex;
  height: 60px;
  display: flex;
  border-bottom: 0.5px solid ${color.mercury};
`;

export const FriendNameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FriendName = styled.div`
  text-align: center;
  color: ${color.azureRadiance};
  font-size: ${fontSize.medium};
`;

export const FriendStatus = styled.div`
  text-align: center;
  color: ${color.hitGray};
  font-size: ${fontSize.small};
`;

export const FriendChatOptions = styled.div`
  flex: 1;
  text-align: end;
  padding-right: 10px;
`;

export const HeaderItem = styled.div`
  height: 60px;
  border-bottom: 0.5px solid ${color.mercury};
`;

export const ChatListSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ChatItem = styled.div`
  height: 60px;
  min-height: 60px;
  width: 100%;
  margin: 2px 0px;
  border-bottom: 0.5px solid ${color.mercury};
  display: flex;
`;

export const ChatList = styled.div`
  flex: 100px;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid ${color.mercury};
  overflow: auto;
  ${ChatItem}:nth-child(1) {
    border-top: 0.5px solid ${color.mercury};
  }
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

export const ChatSearchWrapper = styled.div`
  border-right: 0.5px solid ${color.mercury};
`;

export const ChatSearchContainer = styled.div`
  margin: 10px;
  display: flex;
  border: 0.5px solid ${color.mercury};
  outline-color: #80bbff;
  border-radius: 5px;
`;

export const ChatSearchIcon = styled.i`
  padding: 10px;
  padding-right: 25px;
  width: 20px;
  font-size: 12px;
  color: #c1c1c1;
`;

export const ChatSearch = styled.input`
  flex: 1;
  height: 35px;
  border-radius: 1px;
  outline: none;
  border: none;
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
  background-color: #f9f9f9;
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

export const MessageContainer = styled.div`
  width: 100%;
  height: 120px;
  border: 0.5px solid ${color.mercury};
  display: flex;
  flex-direction: column;
`;

export const MessageInput = styled.textarea`
  flex: 60%;
  width: 100%;
  border: none;
  outline-style: none;
`;

export const MessageButtonContainer = styled.div`
  flex: 30%;
  display: flex;
  flex-direction: row;
`;

export const MessageButtons = styled.div`
  flex: 40%;
  display: flex;
  padding-left: 20px;
  align-items: center;
`;

export const Box = styled.div`
  flex: ${(props) => props.flex};
`;

export const MessageButton = styled.div`
  flex: 1;
`;
