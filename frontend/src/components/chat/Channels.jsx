import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
import { io } from 'socket.io-client';
import { actions as channelsActions, fetchChannels } from '../../store/slices/channelsSlice';

const Channels = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  const socket = io();
  socket.on('newChannel', (payload) => {
    dispatch(channelsActions.addNewChannel(payload));
  });

  const channels = Object.values(useSelector((state) => state.channels.entities));
  console.log('channels>>>>', channels);
  // СТОР ПОЧЕМУ ТО ПУСТОЙ
  // РАЗОБРАТЬСЯ!!!!
  // КАНАЛЫ НЕ ОТОБРАЖАЮТСЯ
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);

  const changeChannel = (id) => {
    const payload = { channelId: id };
    dispatch(channelsActions.setCurrentChannel(payload));
  };

  return channels && (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2" />
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map(({ id, name, removable }) => (
          <li key={id} className="nav-item w-100">
            <Dropdown as={ButtonGroup} className="d-flex">
              <button
                type="submit"
                className={cn('w-100', 'rounded-0', 'text-start', 'btn', 'text-truncate', {
                  'btn-secondary': currentChannelId === id,
                })}
                onClick={() => changeChannel(id)}
              >
                #
                {' '}
                {name}

              </button>
              {removable && (
              <>
                <Dropdown.Toggle variant={currentChannelId === id ? 'secondary' : 'light'} split className="flex-grow-0" id="dropdown-split-basic" />

                <Dropdown.Menu variant="light">
                  <Dropdown.Item href="#/action-1">Удалить</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Переименовать</Dropdown.Item>
                </Dropdown.Menu>
              </>
              )}
            </Dropdown>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Channels;
