import React from 'react';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { useSelector } from 'react-redux';
import ChannelsHeader from './ChanelsHeader';
import Channels from './Channels';

const ChannelsBox = () => {
  // const dispatch = useDispatch();
  const handleAddChannel = () => {
    console.log('Clicked!!!');
  };

  // const { entities, currentChannelId } = useSelector((state) => state.channels);
  // const channels = Object.values(entities);
  // console.log(channels);
  // ВЫБОР КАНАЛА СО СМЕНОЙ ID по КЛИКУ

  return (
    <div id="channels-box">
      <ChannelsHeader handleAddChannel={handleAddChannel} />
      <Channels />
    </div>
  );
};

export default ChannelsBox;
