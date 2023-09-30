import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import { useAuth } from '../providers/AuthProvider';
import { fetchData } from '../../redux/slices/channelsSlice';
import ChannelsList from '../chatComponents/ChannelsList';
import ChannelsHeader from '../chatComponents/ChannelHeader.jsx';
import MessagesBox from '../chatComponents/MessagesBox';
import MessageField from '../chatComponents/MessageField';
import ChatModal from '../chatComponents/ChatModal';
import Loader from '../Loader';
// import { loaderSelector } from '../../redux/slices/loaderSlice';
// import fetchAuthData from '../../redux/thunk';

const ChatPage = () => {
  const { getAuthHeader } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(getAuthHeader));
  }, [dispatch, getAuthHeader]);

  const { channelsState } = useSelector((state) => state.channels);

  if (channelsState === 'idle') {
    return (
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <ChatModal />
        <Row className="h-100 bg-white flex-md-row">
          <ChannelsList />
          <Col className="p-0 h-100">
            <div className="d-flex flex-column h-100">
              <ChannelsHeader />
              <MessagesBox />
              <div className="mt-auto px-5 py-3">
                <MessageField />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Loader />
  );
};

export default ChatPage;
