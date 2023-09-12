import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';

const ChannelsBox = () => {
  // const dispatch = useDispatch();

  const { entities, currentChannelId } = useSelector((state) => state.channels);
  const channels = Object.values(entities);
  console.log(channels);
  return (
    <div id="channels-box">
      <div>ChannelsBox = </div>
      {channels.length}
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map((channel) => (
          <li key={channel.id} className="nav-item w-100">
            {channel.removable
              ? (
                <Dropdown as={ButtonGroup} className="d-flex">
                  <Button
                    type="button"
                    key={channel.id}
                    className="w-100 rounded-0 text-start text-truncate"
                    variant={channel.id === currentChannelId ? 'secondary' : null}
                  >
                    <span className="me-1">#</span>
                    {channel.name}
                  </Button>
                  <Dropdown.Toggle split className="flex-grow-0" variant={channel.id === currentChannelId ? 'secondary' : null}>
                    <span className="visually-hidden">=</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action 1</Dropdown.Item>
                    <Dropdown.Item>Action 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  type="button"
                  variant={channel.id === currentChannelId ? 'secondary' : null}
                  key={channel.id}
                  className="w-100 rounded-0 text-start"
                  onClick
                >
                  <span className="me-1">#</span>
                  {channel.name}
                </Button>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelsBox;
