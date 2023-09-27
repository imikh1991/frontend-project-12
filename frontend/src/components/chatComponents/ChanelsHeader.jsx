import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentChannel, getCurrentChannelMessages } from '../../store/slices/selectors';

const ChannelsHeader = () => {
  const currentChannel = useSelector((state) => getCurrentChannel(state));
  const channelMessagesCount = useSelector((state) => getCurrentChannelMessages(state)).length;

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0"><b>{`# ${currentChannel.name}`}</b></p>
      <span className="text-muted">{('Cообщений', { count: channelMessagesCount })}</span>
    </div>
  );
};

export default ChannelsHeader;
