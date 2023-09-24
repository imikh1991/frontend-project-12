import React from 'react';
import {
  Button, ButtonGroup, Col, Dropdown, Nav,
} from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies

import { getAllChannels, getCurrentChannelId } from '../../store/slices/selectors';
import { actions } from '../../store/slices/channelsSlice';
import { openModal } from '../../store/slices/modalSlice';

const Channels = () => {
  const dispatch = useDispatch();

  const showModal = (type, id) => () => {
    dispatch(openModal({ type, id }));
  };

  const channels = useSelector((state) => getAllChannels(state));
  console.log('channels>>>', channels);
  // EMPTY!!!!
  const currentChannelId = useSelector((state) => getCurrentChannelId(state));
  console.log('currentChannelId>>>', currentChannelId);
  /* КАНАЛЫ МЕНЯЕМ ПО КЛИКУ
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);

  const changeChannel = (id) => {
    const payload = { channelId: id };
    dispatch(channelsActions.setCurrentChannel(payload));
  };
  */
  return (
    <Col
      md="2"
      className="col-4 border-end pt-5 px-0 bg-light"
    >
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">

        <Button
          type="button"
          variant="group-vertical"
          className="p-0 text-primary"
        >

          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <Nav
        fill
        variant="pills"
        as="ul"
        className="flex-column px-2"
      >
        {channels && currentChannelId && (
          channels.map(({ id, removable }) => {
            const variant = id === currentChannelId ? 'secondary' : 'light';
            return (removable) ? (
              <Nav.Item key={id} className="w-100">
                <Dropdown
                  as={ButtonGroup}
                  className="d-flex rounded-0"
                >
                  <Button
                    variant={variant}
                    className="w-100 rounded-0 text-start text-truncate"
                    onClick={() => { dispatch(actions.setCurrentChannelId(id)); }}
                  >
                    <span className="me-1">#</span>
                    {channels}
                  </Button>
                  <Dropdown.Toggle
                    variant={variant}
                  >
                    <span className="visually-hidden">Канал</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={showModal('rename', id)}
                    />
                    <Dropdown.Item
                      onClick={showModal('delete', id)}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            ) : (
              <Nav.Item key={id}>
                <Button
                  variant={variant}
                  className="w-100 rounded-0 text-start text-truncate"
                  onClick={() => { dispatch(actions.setCurrentChannelId(id)); }}
                >
                  <span className="me-1">#</span>
                  {channels}
                </Button>
              </Nav.Item>
            );
          })
        )}
      </Nav>
    </Col>
  );
};

export default Channels;
