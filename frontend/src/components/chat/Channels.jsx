import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import cn from 'classnames';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { io } from 'socket.io-client';
import { actions as channelsActions, fetchChannels } from '../../store/slices/channelsSlice';
import { getAllChannels, getCurrentChannelId } from '../../store/slices/selectors';

const Channels = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  const socket = io();
  socket.on('newChannel', (payload) => {
    dispatch(channelsActions.addNewChannel(payload));
  });
  const channels = useSelector((state) => getAllChannels(state));
  const currentChannelId = useSelector((state) => getCurrentChannelId(state));
  console.log('channels>>>', channels);
  console.log('currentChannelId>>>', currentChannelId);
  /* КАНАЛЫ МЕНЯЕМ ПО КЛИКУ
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);

  const changeChannel = (id) => {
    const payload = { channelId: id };
    dispatch(channelsActions.setCurrentChannel(payload));
  };
  */
  return channels && (
    <div className="bg-light">
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map(({ id, name }) => (
          <li key={id} className="nav-item w-100">
            <Button
              className="w-100 rounded-0 text-start text-truncate"
              onClick={() => { dispatch(channelsActions.setCurrentChannelId(id)); }}
            >
              <span className="me-1">#</span>
              {name}
            </Button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Channels;
