import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import filter from 'leo-profanity';
import { getCurrentChannel, getCurrentChannelMessages } from '../../redux/slices/selectors';

const ChannelsHeader = () => {
  const { t } = useTranslation();
  const currentChannel = useSelector((state) => getCurrentChannel(state));
  const channelMessagesCount = useSelector((state) => getCurrentChannelMessages(state)).length;

  const channelName = filter.clean(currentChannel.name);
  const messageCountText = t('chat.number_of_messages', { count: channelMessagesCount });

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0"><b>{`# ${channelName}`}</b></p>
      <span className="text-muted">{messageCountText}</span>
    </div>
  );
};

export default ChannelsHeader;
