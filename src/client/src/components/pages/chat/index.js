import React from "react";
import Icon from "src/components/icon";
import { icon, placeholder, iconSize } from "src/values";
import {
  FlexContainer,
  Wrapper,
  LeftSectionContainer,
  RightSectionContainer,
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
  MessageInputContainer,
  MessagesContent,
  ChatSearchIcon,
  ChatSearchContainer,
  MessageButtonsContainer,
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

const FriendChatItem = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    return (
      <ChatItem>
        <Avatar>
          <Avatar.Img></Avatar.Img>
        </Avatar>
        <UserName>bilal</UserName>
      </ChatItem>
    );
  });
};

const FriendChatSearch = () => {
  return (
    <ChatSearchWrapper>
      <ChatSearchContainer>
        <ChatSearchIcon className={icon.search}></ChatSearchIcon>
        <ChatSearch placeholder={placeholder.search}></ChatSearch>
      </ChatSearchContainer>
    </ChatSearchWrapper>
  );
};

const FriendsChatList = (props) => {
  return (
    <ChatListSection>
      <FriendChatSearch />
      <ChatList>
        <FriendChatItem />
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

const MessageButtons = () => {
  return (
    <MessageButtonsContainer>
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
    </MessageButtonsContainer>
  );
};

const MessageInput = () => {
  return (
    <MessageContainer>
      <MessageInputContainer></MessageInputContainer>
      <MessageButtonContainer>
        <Box flex={"60%"} />
        <MessageButtons />
      </MessageButtonContainer>
    </MessageContainer>
  );
};

const MessagesArea = () => {
  return (
    <BodyItem>
      <MessagesContent></MessagesContent>
      <MessageInput />
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

const LeftSection = () => {
  return (
    <LeftSectionContainer>
      <Header />
      <FriendsChatList />
    </LeftSectionContainer>
  );
};

const RightSection = () => {
  return (
    <RightSectionContainer>
      <FriendChatInfo />
      <MessagesArea />
    </RightSectionContainer>
  );
};

const ChatPage = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <LeftSection />
        <RightSection />
      </FlexContainer>
    </Wrapper>
  );
};

export default ChatPage;
