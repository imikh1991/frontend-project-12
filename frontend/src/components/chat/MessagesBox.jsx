import React from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const MessagesBox = () => {
  const { entities } = useSelector((state) => state.messages);
  const messages = Object.values(entities);
  const { currentChannelId } = useSelector((state) => state.channels);
  console.log('currentChannelId>>>', currentChannelId);
  console.log(messages);

  return (
    <div className="d-flex flex-column h-100">
      <ChatHeader currentChannelId={currentChannelId} />
      <div id="messages-box" className="chat-messages overflow-auto px-5 " />
      <Messages currentChannelId={currentChannelId} />
    </div>
  );
};

export default MessagesBox;
