import React from "react";
import { ChatPage } from "src/components/pages";
import SideBar from "src/components/sideBar";

const ChatContainer = (props) => {
  return (
    <ChatPage>
      <SideBar />
    </ChatPage>
  );
};

export default ChatContainer;
