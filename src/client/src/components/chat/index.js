import React from 'react';
import {
    FlexContainer, Wrapper, LeftSection, RightSection,
    HeaderItem,
    ChatList,
    Options,
    UserInfo,
    Option,
    BodyItem,
    ChatItem,
    Avatar,
    UserName,
    ChatSearch,
    ChatListSection,
    MessageInput,
    MessagesContent,
    ChatSearchIcon,
    ChatSearchContainer
} from './styles/';


const ChatPage = () => {
    return (
        <Wrapper>
                  <FlexContainer>
       <LeftSection>
            <HeaderItem>
                <Options>
                <Option>
Inbox
                </Option>
                <Option>
Friends
                </Option>
                <Option>
More
                </Option>
                </Options>
        
            </HeaderItem>
            <ChatListSection>
            <ChatSearchContainer>
                <ChatSearchIcon className="fas fa-search"></ChatSearchIcon>
            <ChatSearch placeholder={"Search"}>

</ChatSearch>
            </ChatSearchContainer>
           
            <ChatList>
                <ChatItem>
                <Avatar>
                <Avatar.Img>

                </Avatar.Img>
                </Avatar>
                <UserName>bilal</UserName>
                </ChatItem>
                <ChatItem>
                <Avatar>
                <Avatar.Img>

</Avatar.Img>
                </Avatar>
                <UserName>brahim</UserName>
                </ChatItem>
                <ChatItem>

                </ChatItem>
                <ChatItem>

</ChatItem>
<ChatItem>

</ChatItem>
<ChatItem>

</ChatItem>
<ChatItem>

</ChatItem>
<ChatItem>

</ChatItem>
<ChatItem>

</ChatItem>
            </ChatList>
            </ChatListSection>
       </LeftSection>
       <RightSection>
       <HeaderItem>
       <UserInfo>

</UserInfo>
</HeaderItem>
<BodyItem>
<MessagesContent></MessagesContent>
<MessageInput></MessageInput>
</BodyItem>
       </RightSection>
</FlexContainer>
        </Wrapper>
  
    );
}

export default ChatPage;