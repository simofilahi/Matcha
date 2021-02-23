import React from "react";
import Icon from "src/components/icon";
import { icon, placeholder, iconSize } from "src/values";
import {
  FlexContainer,
  Wrapper,
  LeftSection,
  RightSection,
  HeaderItem,
  ChatList,
  Options,
  FriendName,
  Option,
  BodyItem,
  ChatItem,
  UserName,
  Avatar,
  ChatSearch,
  ChatListSection,
  MessageInput,
  MessagesContent,
  ChatSearchIcon,
  ChatSearchContainer,
  MessageButtons,
  MessageButton,
  MessageContainer,
  MessageButtonContainer,
  Box,
  FriendChatInfoContainer,
  FriendStatus,
  FriendNameContainer,
  FriendChatOptions,
  ChatSearchWrapper,
} from "./styles";

const FriendsChatList = (props) => {
  return (
    <ChatListSection>
      <ChatSearchWrapper>
        <ChatSearchContainer>
          <ChatSearchIcon className={icon.search}></ChatSearchIcon>
          <ChatSearch placeholder={placeholder.search}></ChatSearch>
        </ChatSearchContainer>
      </ChatSearchWrapper>
      <ChatList>
        <ChatItem>
          <Avatar>
            <Avatar.Img></Avatar.Img>
          </Avatar>
          <UserName>bilal</UserName>
        </ChatItem>
        <ChatItem>
          <Avatar>
            <Avatar.Img></Avatar.Img>
          </Avatar>
          <UserName>brahim</UserName>
        </ChatItem>
        <ChatItem>
          <Avatar>
            <Avatar.Img></Avatar.Img>
          </Avatar>
          <UserName>bilal</UserName>
        </ChatItem>
        <ChatItem>
          <Avatar>
            <Avatar.Img></Avatar.Img>
          </Avatar>
          <UserName>brahim</UserName>
        </ChatItem>
      </ChatList>
    </ChatListSection>
  );
};

const Header = () => {
  return (
    <HeaderItem>
      <Options>
        <Option>Inbox</Option>
        <Option>Friends</Option>
        <Option>More</Option>
      </Options>
    </HeaderItem>
  );
};

const MessageInputComponent = () => {
  return (
    <MessageContainer>
      <MessageInput></MessageInput>
      <MessageButtonContainer>
        <Box flex={"60%"} />
        <MessageButtons>
          <MessageButton type="typing">
            <Icon className={icon.keyboard} size={"24px"} />
          </MessageButton>
          <MessageButton type="emotion">
            <Icon className={icon.emotion} size={"24px"} />
          </MessageButton>
          <MessageButton type="uploadImage">
            <Icon className={icon.image} size={"24px"} />
          </MessageButton>
          <MessageButton type="send">
            <Icon className={icon.send} size={"24px"} />
          </MessageButton>
        </MessageButtons>
      </MessageButtonContainer>
    </MessageContainer>
  );
};

const MessagesArea = () => {
  return (
    <BodyItem>
      <MessagesContent></MessagesContent>
      <MessageInputComponent />
    </BodyItem>
  );
};

const FriendChatStatus = () => <FriendStatus>last seen yesterday</FriendStatus>;

const FriendChatName = () => <FriendName>simao</FriendName>;

const FriendChatInfo = () => {
  return (
    <FriendChatInfoContainer>
      <Box flex={"1"} />
      <FriendNameContainer>
        <FriendChatName />
        <FriendChatStatus />
      </FriendNameContainer>
      <FriendChatOptions>
        <Icon className={icon.ellipsis} size={iconSize.medium} />
      </FriendChatOptions>
    </FriendChatInfoContainer>
  );
};

const ChatPage = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <LeftSection>
          <Header />
          <FriendsChatList />
        </LeftSection>
        <RightSection>
          <FriendChatInfo />
          <MessagesArea />
        </RightSection>
      </FlexContainer>
    </Wrapper>
  );
};

export default ChatPage;
