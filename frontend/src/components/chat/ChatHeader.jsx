import React from 'react';
import { useSelector } from 'react-redux';
import filter from 'leo-profanity';
import { getCurrentChannel, getCurrentChannelMessages } from '../../store/slices/selectors';

const ChatHeader = () => {
  // name - > ВЗЯТЬ ИЗ REDUX
  const currentChannel = useSelector((state) => getCurrentChannel(state));
  const channelMessagesCount = useSelector((state) => getCurrentChannelMessages(state)).length;

  console.log('currentChannelName>>', currentChannel);
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          #
          {' '}
          {filter.clean(currentChannel.name)}
        </b>
      </p>
      <span className="text-muted">
        {channelMessagesCount}
        {' '}
        сообщений
      </span>
    </div>
  );
};

export default ChatHeader;
