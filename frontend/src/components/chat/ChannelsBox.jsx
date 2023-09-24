import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Button } from 'react-bootstrap';
import AddChannelModal from '../modal/AddChannel'; // Import your modal component
import ChannelsHeader from './ChanelsHeader';
import Channels from './Channels';

const ChannelsBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { entities, currentChannelId } = useSelector((state) => state.channels);
  const channels = Object.values(entities);
  console.log('channels>>>', channels);
  console.log('currentChannelId>>>', currentChannelId);

  const handleAddChannel = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="channels-box">
      <ChannelsHeader handleAddChannel={handleAddChannel} />
      <Channels />

      {isModalOpen && (
        <AddChannelModal
          show={isModalOpen}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ChannelsBox;
