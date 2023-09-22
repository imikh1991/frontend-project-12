import React from 'react';
import { useSelector } from 'react-redux';

import Messages from './Messages';

const MessagesBox = () => {
  const { entities } = useSelector((state) => state.messages);
  const messages = Object.values(entities);

  console.log(messages);

  return (
    <Messages />
  );
};

export default MessagesBox;
