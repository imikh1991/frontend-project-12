import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PlusSquare } from 'react-bootstrap-icons';
// import filter from 'leo-profanity';
import { getCurrentChannel, getCurrentChannelMessages } from '../../store/slices/selectors';

const ChannelsHeader = ({ handleAddChannel }) => {
  const currentChannel = useSelector((state) => getCurrentChannel(state));
  const channelMessagesCount = useSelector((state) => getCurrentChannelMessages(state)).length;
  console.log('currentChannel>>>>', currentChannel);
  return (
    <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
      <span>Каналы</span>
      <Button
        type="button"
        variant="group-vertical"
        className="p-0 text-primary"
        onClick={handleAddChannel}
      >
        <PlusSquare size={20} />
        <span className="visually-hidden">+</span>
      </Button>
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0"><b>{`# ${(currentChannel.name)}`}</b></p>
        <span className="text-muted">{ channelMessagesCount }</span>
      </div>
    </div>
  );
};

export default ChannelsHeader;
