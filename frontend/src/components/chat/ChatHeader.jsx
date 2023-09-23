import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../store/slices/messagesSlice';

const ChatHeader = ({ currentChannelId }) => {
  // name
  const currentChannelName = useSelector((state) => state.channels.entities[currentChannelId]);
  const messageCount = useSelector(selectors.selectTotal);
  console.log('currentChannelName>>', currentChannelName);
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          #
          {' '}
          {currentChannelName}
        </b>
      </p>
      <span className="text-muted">
        {messageCount}
        {' '}
        сообщений
      </span>
    </div>
  );
};

export default ChatHeader;
