import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector

import Messages from './Messages';

const MessagesBox = () => {
  const { entities } = useSelector((state) => state.messages);
  const messages = Object.values(entities);

  console.log(messages);

  return (
    <>
      <div>MessagesBox</div>
      {messages.length}
      <Messages />
    </>
  );
};

export default MessagesBox;
